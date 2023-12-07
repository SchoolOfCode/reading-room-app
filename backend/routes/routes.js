import express from "express";

import { getUsersController } from "../controllers/get_users_controllers.js";
import { getUsersByIdController } from "../controllers/get_users_by_id_controller.js";
import { getReadingNotesControllers } from "../controllers/get_reading_notes_controller.js";
import { createReadingNotesControllers } from "../controllers/post_reading_notes_controller.js";
import { getAvatarsControllers } from "../controllers/get_avatars_controller.js";

// Save a variable to express.Router() for easy access
export const userRoutes = express.Router();
export const readingRoomRoutes = express.Router();
export const avatarRoutes = express.Router();
// write route with HTTP method
userRoutes.get("/", getUsersController);
userRoutes.get("/:id", getUsersByIdController);
readingRoomRoutes.get("/", getReadingNotesControllers);
readingRoomRoutes.post("/", createReadingNotesControllers);
avatarRoutes.get("/", getAvatarsControllers);
