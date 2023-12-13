import { getReadingNotesByNickname } from "../helper_functions/getReadingNotesByNickname.js";

export async function getReadingNotesByNicknameController(req, res) {
  try {
    const nickname = req.params.nickname;
    const ReadingNotes = await getReadingNotesByNickname(nickname);
    res.status(200).json({ status: "success", data: ReadingNotes });
  } catch (error) {
    console.error("Error getting reading notes by Nickname:", error);
    res.status(500).json({
      status: "error",
      message:
        "Error getting reading notes . See getReadingNotesByNicknameController.js",
    });
  }
}
