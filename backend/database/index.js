// importing the node-postgres library
import pg from "pg";

// retrieving the database connection string from .env
const connectionString =
  process.env.databaseURL ||
  // REMEMBER TO DELETE THE DATABASE URL
  "postgres://postgres.ezgfdftocdjhcirnfbtf:tMq9Wt0MuxVWoIvt@aws-0-eu-west-2.pooler.supabase.com:6543/postgres";

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
