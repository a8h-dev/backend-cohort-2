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

module.exports = app;