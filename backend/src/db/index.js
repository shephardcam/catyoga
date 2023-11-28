const pg = require("pg");

const client = new pg.Client({
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// console.log("values passing to client:", process.env.PGHOST, process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, process.env.PGPORT);

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
