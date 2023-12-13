import { getReadingNotesById } from "../helper_functions/getReadingNotesById.js";

export async function getReadingNotesByIdController(req, res) {
  try {
    const id = req.params.id;
    const ReadingNotes = await getReadingNotesById(id);
    res.status(200).json({ status: "success", data: ReadingNotes });
  } catch (error) {
    console.error("Error getting reading notes by ID:", error);
    res.status(500).json({
      status: "error",
      message:
        "Error getting reading notes . See getReadingNotesByNicknameControlle.js",
    });
  }
}
