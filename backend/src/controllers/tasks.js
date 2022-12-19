const db = require('../db')



exports.createTask = async (req, res) => {
    try {
      const { description, posted_by } = req.body;
      const result = await pool.query(
        'INSERT INTO tasks (description, posted_by) VALUES ($1, $2) RETURNING *',
        [description, posted_by]
      );
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred' });
    }
  };

exports.updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { description, completed_by } = req.body;
      const result = await pool.query(
        'UPDATE tasks SET description = $1, completed_by = $2, completed_at = current_date WHERE id = $3 RETURNING *',
        [description, completed_by, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred' });
    }
  };