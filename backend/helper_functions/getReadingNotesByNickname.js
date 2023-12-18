import { pool } from "../database/index.js";

// Create a helper function to query all the data from reading_notes table
export async function getReadingNotesByNickname(userId) {
  try {
    // Define the SQL query to fetch reading notes for a specific user
    const queryText = `SELECT * FROM reading_notes
    INNER JOIN users
    ON reading_notes.users_id = users.id
    INNER JOIN avatars
    ON reading_notes.users_id = avatars.users_id
    WHERE users.id = $1`;

    // Use the pool object to send the query to the database
    const result = await pool.query(queryText, [userId]);

    // The rows property of the result object contains the retrieved records
    return result.rows;
  } catch (error) {
    console.error("Error originated in get_ReadingNotesByNickname.js", error);
    throw error; // Rethrow the error for better error handling upstream
  }
}
