const db = require('../db')

exports.searchTable = async (req, res) => {
    const { searchTerm } = req.query;
    const table = req.params.table;
  
    try {
      const results = await db.query(
        `SELECT * FROM ${table} WHERE * LIKE '%${searchTerm}%'`
      );
  
      return res.json({
        success: true,
        results: results.rows
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: error.message
      });
    }
  };
  
  