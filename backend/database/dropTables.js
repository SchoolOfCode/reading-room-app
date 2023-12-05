import { pool } from "./index.js";

// Creating a function to drop the tables, if they exist
export async function dropTables() {
  try {
    await pool.query(`DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS reading_notes;
        DROP TABLE IF EXISTS avatars;`);
    console.log("tables successfully dropped");
  } catch (error) {
    console.error(
      "Dropping databases failed - issue originated in dropTables.js",
      error
    );
  }
}
