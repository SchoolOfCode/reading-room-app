import { pool } from "../database/index.js";

// Create a function to get a user by its id
export async function getUserByID(id) {
  try {
    // Define the SQL query to fetch the user with the specified id from the 'users' table
    const queryText = "SELECT * FROM users WHERE id = $1";

    // Use the pool object to send the query to the database
    // Passing the id as a parameter to prevent SQL injection
    const result = await pool.query(queryText, [id]);

    // The rows property of the result object contains the retrieved records
    // If an user with the specified id exists, it will be the first element in the rows array
    // If no user exists with the specified id, the rows array will be empty
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error originated in get_user_by_id.js", error);
  }
}
