// importing the node-postgres library
import pg from "pg";

// retrieving the database connection string from .env.local
const connectionString =
  process.env.databaseURL ||
  "postgres://syzdjgkc:XaS6cN2bqDOMC-JSD4SekxMR6Y-WCWsq@flora.db.elephantsql.com/syzdjgkc";

// Checking to see if the connection string is not defined
if (!connectionString) {
  console.log(connectionString);
  throw new Error(
    "No DB connection string defined - check if .env variables are imported correctly"
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // passing the connectionString through to connect to the DB
  connectionString,
});
