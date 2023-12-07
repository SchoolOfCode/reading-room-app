import { pool } from '../database/index.js';

// Create an helper function to query all the data from reading_notes table
export async function getReadingNotes() {

    try {
    //Define the SQL query to fetch all users from the 'users' table
    const queryText = "SELECT * FROM reading_notes";

    // Use the pool object to send the query to the database
    const result = await pool.query(queryText); 

    // The rows property of the result object contains the retrieved records
    return result.rows;
    }
    catch (error) {
        console.error("Error originated in get_reading_notes.js", error)
    }
}