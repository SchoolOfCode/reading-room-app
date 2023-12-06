import { createReadingNotes } from "../helper_functions/post_reading_notes.js";

export async function createReadingNotesControllers(req, res) {
    try { 
        const newNote = req.body;
        const ReadingNotes = await createReadingNotes(newNote);
        res.status(201).json({ status: "success", data: ReadingNotes}) 

}
catch (error){
    console.error ('Error creating reading notes:', error);
    res.status(500).json({
        status: "error",
        message: "Error creating reading notes . See create_reading_notes_controllers.js",
    });
    }
    }