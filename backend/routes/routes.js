import express from "express";

import { getUsersController } from "../controllers.js/get_users_controllers.js";
import { getUsersByIdController } from "../controllers.js/get_users_by_id_controller.js";
import { getReadingNotesControllers } from "../controllers.js/get_reading_notes_controllers.js";
import { createReadingNotesControllers } from "../controllers.js/post_reading_notes_controller.js";
import { getAvatarsControllers } from "../controllers.js/get_avatars_controllers.js";

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
