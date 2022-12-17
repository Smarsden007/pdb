const { Pool } = require('pg')
const pool = new Pool({
  user: 'sean',
  host: 'localhost',
  database: 'template1',
  password: 'sean',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
