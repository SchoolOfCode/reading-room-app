import { pool } from "../database/index.js";

// Create an helper function to post new notes to reading_notes table
export async function createReadingNotes(reading_notes) {
  try {
    // Query the database to create a new reading note and return the newly created note
    const queryText =
      "INSERT INTO reading_notes (title, author, notes, users_id) VALUES ($1, $2, $3, $4) RETURNING *";

    // Destructure title, authore, notes and users_id from reading_notes object
    const { title, author, notes, users_id } = reading_notes;
    // Use the pool object to send the query to the database, preventing SQL injection
    const result = await pool.query(queryText, [
      title,
      author,
      notes,
      users_id,
    ]);

    // Rows property sgould contain inserted data
    return result.rows[0];
  } catch (error) {
    console.error("Error originated in post_reading_notes.js", error);
  }
}
