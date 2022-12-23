const db = require('../db')

exports.searchTable = async (req, res) => {
    // Get search query from request
    const searchQuery = '%' + req.query.q;
  
    // Construct SQL statement to search all columns in bookings table
    const sql = `SELECT * FROM bookings WHERE fulll_name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1 OR delivery_ad ILIKE $1 OR bouncer ILIKE $1 OR rent_date ILIKE $1 OR rental_time ILIKE $1 OR generator ILIKE $1 OR balloons ILIKE $1 OR half_arch ILIKE $1 OR full_arch ILIKE $1 OR vinyl ILIKE $1 OR vinyl_theme ILIKE $1 OR park ILIKE $1 OR cust_nt ILIKE $1 OR int_nt ILIKE $1 OR paid ILIKE $1 OR deposit ILIKE $1 OR contract_sign ILIKE $1`;



  
    // Execute SQL statement
    db.query(sql, ['%' + searchQuery + '%'], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send();
      } else {
        // Send search results back to client
        res.send(result.rows);
      }
    });
  };
  
  
  