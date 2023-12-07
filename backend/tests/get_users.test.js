// Import vitest
// Run test to check if vitest is properly working
import { test, expect } from "vitest";

// import the Express app from app.js
import app from "../app.js";

// import the function from Supertest (maybe call it `request` like the documentation did)
import request from "supertest";

// Import resetTables function (to reset the database)
import { resetTables } from "../database/resetTables.js";

// Import seedData
import {
  userSeedData,
  notesSeedData,
  avatarSeedData,
} from "../database/seedData.js";

// //Test skeleton
// test('should pass - skeleton', function () {
//   // code here
// });

// Get all users
test("GET/users", async function () {
  // await the 'resetTables' function
  await resetTables();

  // Send a GET request to the /users endpoint
  // Call `request` and pass in the Express app as an argument
  // Await the overall expression and assign it to a `response` constant
  const response = await request(app).get("/users");

  // Assertions: response status = 200,
  // Response body = { success: true, data: an array of users objects } ,
  // Response header: Content-Type header should contain application/json
  expect(response.body.status).toMatch("success");

  console.log(`response.body`);
  console.log(response.body);
  // expect(Array.isArray(response.body.data)).toContain(true);
  expect(response.body).toStrictEqual({
    status: "success",
    data: [
      {
        id: 1,
        nickname: "Auntie Marie",
      },
      {
        id: 2,
        nickname: "Chad",
      },
    ],
  });

  expect(response.headers["content-type"]).toMatch("application/json");

  expect(response.status).toBe(200);
});

// reading-notes.test.js
// test to check the api call for reading_notes
test("GET/reading_notes test", async function () {
  // use supertest to send get request to /reading_notes
  const response = await request(app).get("/reading_notes");

  // Accessing today's date via date in res body to equal current date
  let currentDate = response.body.data[0].date;
  console.log(currentDate);
  // assert status code respons
  expect(response.status).toBe(200);

  //expect status response body
  expect(response.body).toStrictEqual({
    status: "success",
    data: [
      {
        id: 1,
        date: currentDate,
        title: "The Tiger That Came To Tea",
        author: "Judith Kerr",
        notes:
          "The tiger that came to tea is a great book for young readers. The story is about a tiger who comes for tea.",
        users_id: 1,
      },
      {
        id: 2,
        date: currentDate,
        title: "Where's Wally",
        author: "Martin Handford",
        notes:
          "This is a great book for children. I'm really struggling to find Wally on the third page though!",
        users_id: 2,
      },
    ],
  });
  //expect response type to be JSON

  // assert body status
  expect(response.body.status).toMatch("success");
});


// get_avatars.test.js
// test to check the api call for avatars
test("GET/avatar test", async function () {
  // await the 'resetTables' function
  // await resetTables();

  // use supertest to send get request to /avatars
  const response = await request(app).get("/avatars");

  // assert status code respons
  expect(response.status).toBe(200);

  //expect status response body
  expect(response.body).toStrictEqual({
    status: "success",
    data: [
      {
        id: 1,
        avatar_img:
          "https://mrmen.com/cdn/shop/t/37/assets/svg--character--mr-happy.svg?v=32825736591941550291695746657",
        users_id: 1,
      },
      {
        id: 2,
        avatar_img:
          "https://mrmen.com/cdn/shop/t/37/assets/svg--character--mr-tickle.svg?v=32825736591941550291695746657",
        users_id: 2,
      },
    ],
  });
});
