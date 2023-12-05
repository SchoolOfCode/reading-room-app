import { pool } from '../index.js';

// Create a function to GET all users
export async function getUsers() {

    try {
    //Define the SQL query to fetch all users from the 'users' table
    const queryText = "SELECT * FROM users"

    // Use the pool object to send the query to the database
    const result = await pool.query(queryText);

    // The rows property of the result object contains the retrieved records
    return result.rows;
    }
    catch (error) {
        console.error("Error originated in get_users.js", error)
    }
}