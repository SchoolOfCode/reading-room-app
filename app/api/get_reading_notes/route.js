// Importing the "pool" object from the database connection module
import { pool } from "@/backend/database/index.js";

// Handler function for the GET request
export async function getReadingNotes(request) {
  try {
    // Extracting the user ID from the request query parameters
    const { userId } = request.query;

    // SQL query to fetch reading notes and related information for a specific user
    const queryText = `
      SELECT * FROM reading_notes
      INNER JOIN users ON reading_notes.users_id = users.id
      INNER JOIN avatars ON reading_notes.users_id = avatars.users_id
      WHERE users.id = $1
    `;

    // Executing the SQL query using the "pool" object and passing the required parameters
    const result = await pool.query(queryText, [userId]);

    // Extracting the rows from the query result
    const readingNotes = result.rows;

    // Returning a successful response with the reading notes as JSON
    return {
      props: {
        status: "success",
        data: readingNotes,
      },
    };
  } catch (error) {
    // Handling any errors that occur during the execution of the GET request
    console.error(
      "Error originated in GET request: api/get_reading_notes/route.js",
      error
    );

    // Returning an error response with an appropriate error message
    return {
      props: {
        status: "error",
        message:
          "Error fetching reading notes. Error originated in api/get_reading_notes/route.js.",
      },
      status: 500,
    };
  }
}

export default getReadingNotes;
