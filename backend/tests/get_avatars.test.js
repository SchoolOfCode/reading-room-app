import { test, expect } from "vitest";
import app from "../app.js";
import request from "supertest";

// Import resetTables function (to reset the database)
import { resetTables } from "../database/resetTables.js";

// test("should pass - skeleton", function () {
//   // code here
// });

// // test to check the api call for avatars
// test("GET/avatar test", async function () {
//   // await the 'resetTables' function
//   // await resetTables();

//   // use supertest to send get request to /avatars
//   const response = await request(app).get("/avatars");

//   // assert status code respons
//   expect(response.status).toBe(200);

//   //expect status response body
//   expect(response.body).toStrictEqual({
//     status: "success",
//     data: [
//       {
//         id: 1,
//         avatar_img:
//           "https://mrmen.com/cdn/shop/t/37/assets/svg--character--mr-happy.svg?v=32825736591941550291695746657",
//         users_id: 1,
//       },
//       {
//         id: 2,
//         avatar_img:
//           "https://media.gettyimages.com/id/647313230/photo/bearded-and-tattooed-hipster-coffee-shop-owner-posing.jpg?s=612x612&w=gi&k=20&c=9qVr9QG4tgT9xOa8G1algKbRCtlIwTeTk0B6V5wfm3k=",
//         users_id: 2,
//       },
//     ],
//   });
// });
