import { test, expect } from "vitest";
import app from "../app.js";
import request from "supertest";

// test("should pass - skeleton", function () {
//   // code here
// });

// test to check the api call for reading_notes
test("GET/reading_notes test", async function () {
  // use supertest to send get request to /reading_notes
  const response = await request(app).get("/reading_notes");
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
