const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'containers-us-west-89.railway.app',
  database: 'railway',
  password: 'DWqN5oDcgd7inGdFgfnN',
  port: 7194,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
