import { pool } from "./index.js";

export async function createTables() {
  try {
    // creating users table
    await pool.query(`
        CREATE TABLE users(id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, nickname VARCHAR(100) NOT NULL);`);

    // creating reading_notes table
    await pool.query(`
        CREATE TABLE reading_notes(id INT GENERATED ALWAYS AS IDENTITY, date DATE DEFAULT CURRENT_DATE, title VARCHAR(225) NOT NULL, author VARCHAR(225) NOT NULL, notes TEXT NOT NULL, users_id INT REFERENCES users(id));`);

    // creating avatars table
    await pool.query(`
        CREATE TABLE avatars(id INT GENERATED ALWAYS AS IDENTITY, avatar_img VARCHAR(500) NOT NULL, users_id INT REFERENCES users(id));`);

    console.log("Tables successfully created. Time to start reading!");
  } catch (error) {
    console.error(
      "Database reset failed - issue originated in createTables.js",
      error
    );
  }
}
