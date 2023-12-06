import { test, expect } from "vitest";
import app from "../app.js";
import request from "supertest";
import { getReadingNotesControllers } from "../controllers/get_reading_notes_controller.js";

// test("should pass - skeleton", function () {
//   // code here
// });

// test to check the api call for reading_notes
test("Get reading_notes test", async function () {
  // use supertest to send get request to /reading_notes
  const response = await request(app).get("/reading_notes");

  // assert status code respons
  expext(response.status).toBe(200);

  //expect status response body
  expext(response.body).toStrictEqual();
  //expect response type to be JSON
});
