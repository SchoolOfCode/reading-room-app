// Importing the "pool" object from the database connection module
import { pool } from "@/backend/database/index.js";

// Handler function for the POST request
export async function POST(request) {
  try {
    console.log(users_id);
    // Extracting the "title", "author", and "notes" properties from the JSON body of the request
    const { title, author, notes, users_id } = await request.json();

    // SQL query to insert the reading note into the "reading_notes" table and return the newly created note
    const queryText =
      "INSERT INTO reading_notes (title, author, notes, users_id) VALUES ($1, $2, $3, $4) RETURNING *";

    // Executing the SQL query using the "pool" object and passing the required parameters
    const result = await pool.query(queryText, [
      title,
      author,
      notes,
      users_id,
    ]);

    // Extracting the first row (the newly created note) from the query result
    const createdNote = result.rows[0];

    // Returning a successful response with the created note as JSON
    return new Response(
      JSON.stringify({ status: "success", data: createdNote }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handling any errors that occur during the execution of the POST request
    console.error(
      "Error originated in POST request: api/reading_notes/route.js",
      error
    );

    // Returning an error response with an appropriate error message
    return new Response(
      JSON.stringify({
        status: "error",
        message:
          "Error creating reading notes. Error originated in BookForm.js, line 41.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
