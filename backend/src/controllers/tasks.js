const db = require('../db')

exports.createTask = async (req, res) => {
  try {
    const { description, completed_by, posted_by } = req.body;

    const [id] = await db("tasks").insert({
      description,
      completed_by,
      posted_by,
      created_at: new Date().toISOString(),
    });

    const newTask = await db("tasks").where({ id }).first();

    return res.status(201).json({
      success: true,
      task: newTask,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed_by } = req.body;
    const completed_at = new Date().toISOString().slice(0, 10);

    const updateTaskQuery = `UPDATE tasks SET completed_by=$1, completed_at=$2 WHERE id=$3 RETURNING *`;
    const values = [completed_by, completed_at, id];

    const { rows } = await db.query(updateTaskQuery, values);

    if (!rows[0]) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: rows[0],
    });
  } catch (error) {
    console.log(error.message);
  }
}
exports.getIncompleteTasks = async (req, res) => {
    try {
      const { rows } = await db.query("SELECT * FROM tasks WHERE completed_at IS NULL");
  
      return res.status(200).json({
        success: true,
        tasks: rows,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
exports.getCompletedTasks = async (req, res) => {
    try {
      const { rows } = await db.query("SELECT * FROM tasks WHERE completed_at IS NOT NULL");
  
      return res.status(200).json({
        success: true,
        tasks: rows,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
    