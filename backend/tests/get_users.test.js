// Import vitest
// Run test to check if vitest is properly working
import { test, expect } from 'vitest';

// import the Express app from app.js
import app from '../app.js';

// import the function from Supertest (maybe call it `request` like the documentation did)
import request from 'supertest';

// Import resetTables function (to reset the database)
import { resetTables } from '../database/resetTables.js';

// Import seedData 
import { userSeedData, notesSeedData, avatarSeedData } from '../database/seedData.js'; 

// //Test skeleton
// test('should pass - skeleton', function () {
//   // code here
// });

// Get all users
test('GET /users', async function () {
  // await the 'resetTables' function
  await resetTables(userSeedData);

  // Send a GET request to the /users endpoint
  // Call `request` and pass in the Express app as an argument
  // Await the overall expression and assign it to a `response` constant
  const response = await request(app).get('/users');

  // Assertions: response status = 200, 
  // Response body = { success: true, data: an array of users objects } , 
  // Response header: Content-Type header should contain application/json
  expect(response.body.success).toBe(true);

  expect(Array.isArray(response.body.data)).toBe(true);

  expect(response.headers['content-type']).toMatch('application/json');

  expect(response.status).toBe(200);

})