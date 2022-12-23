const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgresql://postgres:DWqN5oDcgd7inGdFgfnN@containers-us-west-89.railway.app:7194/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;