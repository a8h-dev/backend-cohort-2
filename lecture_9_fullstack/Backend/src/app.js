const express = require("express");
const app = express();
app.use(express.json());
const noteModel = require("./models/note.model");

// POST /api/notes
// create new note and save data in mongodb
// req.body = {title, description}

app.post("/api/notes", async (req, res) => {
    const {title, description} = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

// GET /api/notes
// Fetch all the data from notes and send them in the response

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find(); 
    // find method hamesha ek array return krti hai, data array of objects ke format me aata hai
    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})

// DELETE /api/notes/:id
// Delete note with the id from req.params

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const deletedNote = await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: `Note deleted successfully of id: ${id}`,
        deletedNote: deletedNote
    })
})

module.exports = app;