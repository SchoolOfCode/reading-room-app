import express from "express";

import { getUsersController } from "../controllers/get_users_controllers.js";
import { getUsersByIdController } from "../controllers/get_users_by_id_controller.js";
import { getUserByNicknameController } from "../controllers/get_user_by_nickname_controller.js";
import { getReadingNotesControllers } from "../controllers/get_reading_notes_controller.js";
import { getReadingNotesByIdController } from "../controllers/GetReadingNotesByIdController.js";
import { getReadingNotesByNicknameController } from "../controllers/getReadingNotesByNicknameController.js";
import { createReadingNotesControllers } from "../controllers/post_reading_notes_controller.js";
import { getAvatarsControllers } from "../controllers/get_avatars_controller.js";
// Save a variable to express.Router() for easy access
export const userRoutes = express.Router();
export const readingRoomRoutes = express.Router();
export const avatarRoutes = express.Router();
// write route with HTTP method
userRoutes.get("/", getUsersController);
userRoutes.get("/id/:id", getUsersByIdController);
userRoutes.get("/nickname/:nickname", getUserByNicknameController);

readingRoomRoutes.get("/", getReadingNotesControllers);
readingRoomRoutes.get("/id/:id", getReadingNotesByIdController);
readingRoomRoutes.get(
  "/nickname/:nickname",
  getReadingNotesByNicknameController
);
readingRoomRoutes.post("/", createReadingNotesControllers);

avatarRoutes.get("/", getAvatarsControllers);
// userRoutes.get("/", getUsersController);
// userRoutes.get("/:id", getUsersByIdController);
// userRoutes.get("/:nickname", getUserByNicknameController);

// // Define routes with regular expressions for ID and nickname
// userRoutes.get("/:id(\\d+)", getUsersByIdController); // Matches numeric IDs
// userRoutes.get("/:nickname([a-zA-Z]+)", getUserByNicknameController); // Matches alphanumeric nicknames
// userRoutes.get("/", getUsersController);
