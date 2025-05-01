const { Pool } = require("pg");
const path = require("node:path");

require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
});

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
