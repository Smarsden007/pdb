const db = require('../db')




exports.getEmployees = async () => {
    try {
      const query = 'SELECT * FROM employees';
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  };