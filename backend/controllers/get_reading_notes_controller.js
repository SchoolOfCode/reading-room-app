import { getReadingNotes } from "../helper_functions/get_reading_notes.js";

export async function getReadingNotesControllers(req, res) {
    try { 
        const ReadingNotes = await getReadingNotes();
        res.status(200).json({ status: "success", data: ReadingNotes}) 

}
catch (error){
    console.error ('Error getting reading notes:', error);
    res.status(500).json({
        status: "error",
        message: "Error getting reading notes . See get_reading_notes_controllers.js",
    });
    }
    }