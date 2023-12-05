import { pool } from '../database/index';

// Create a function to get a user by its id
export async function getUserByID(id) {
    try {
        // Define the SQL query to fetch the user with the specified id from the 'users' table
        const queryText = "SELECT * FROM users WHERE id = $1";

        // Use the pool object to send the query to the database
        // Passing the id as a parameter to prevent SQL injection
        const result = await pool.query(queryText, [id]);
        
        // The rows property of the result object contains the retrieved records
    }
}