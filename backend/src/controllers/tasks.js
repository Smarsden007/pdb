const db = require("../db");



exports.editTask = async (req, res) => {
  try {
    const { completed } = req.body;
    const { id } = req.params;
    const updateTask = await db.query(
      'UPDATE tasks SET completed = $1 WHERE task_id = $2 RETURNING *',
      [completed, id]
    );

    res.json(updateTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
// /:id for above route

exports.createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const completed = false;

    const result = await db.query(
      "INSERT INTO tasks (task_description, completed, date_posted) VALUES ($1, $2, now()) RETURNING *",
      [description, completed]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
};


// /task


// Get all tasks
exports.getAllTask = async (req, res) => {
  try {
    const allTasks = await db.query('SELECT * FROM tasks');
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getIncompleteTasks = async (req, res) => {
  try {
    const completed = req.query.completed;
    const allTasks = await db.query(
      'SELECT * FROM tasks WHERE completed = $1',
      [completed]
    );
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
};

