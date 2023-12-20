import { getReadingNotesByNickname } from "../helper_functions/getReadingNotesByNickname.js";

export async function getReadingNotesByNicknameController(req, res) {
  try {
    const id = req.params.users_id;
    const ReadingNotes = await getReadingNotesByNickname(id);
    res.status(200).json({ status: "success", data: ReadingNotes });
  } catch (error) {
    console.error("Error getting reading notes by users_id:", error);
    res.status(500).json({
      status: "error",
      message:
        "Error getting reading notes . See getReadingNotesByNicknameController.js",
    });
  }
}
