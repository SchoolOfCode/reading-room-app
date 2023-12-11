import { pool } from "./index.js";

// seeding the users table
export async function seedTables() {
  try {
    // seed users table
    await pool.query(`
      INSERT INTO users (nickname) VALUES ('Auntie-Marie'), ('Chad');
    `);

    // seed reading_notes table
    await pool.query(`
      INSERT INTO reading_notes(title, author, notes, users_id)
      VALUES 
        ('The Tiger That Came To Tea', 'Judith Kerr', 'The tiger that came to tea is a great book for young readers. The story is about a tiger who comes for tea.', 1),
        ('Where''s Wally', 'Martin Handford', 'This is a great book for children. I''m really struggling to find Wally on the third page though!', 2);
    `);

    // Seed Avatars
    await pool.query(`
      INSERT INTO avatars (avatar_img, users_id)
      VALUES
        ('https://mrmen.com/cdn/shop/t/37/assets/svg--character--mr-happy.svg?v=32825736591941550291695746657', 1),
        ('https://media.gettyimages.com/id/647313230/photo/bearded-and-tattooed-hipster-coffee-shop-owner-posing.jpg?s=612x612&w=gi&k=20&c=9qVr9QG4tgT9xOa8G1algKbRCtlIwTeTk0B6V5wfm3k=', 2);
    `);
    console.log("Tables successfully populated!");

    // error handling
  } catch (error) {
    console.error(
      "Seeding failed - issue originated in seedTables.js: ",
      error
    );
  }
}
