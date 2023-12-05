import { pool } from '../database/index.js';

// Create a function to GET all avatars
export async function getAvatars() {

    try {
    //Define the SQL query to fetch all avatars from the 'avatars' table
    const queryText = "SELECT * FROM avatars"

    // Use the pool object to send the query to the database
    const result = await pool.query(queryText);

    // The rows property of the result object contains the retrieved records
    return result.rows;
    }
    catch (error) {
        console.error("Error originated in get_avatars.js", error)
    }
}