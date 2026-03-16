// server create and server config

const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes,
        message: "notes fetched successfully"
    })
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    notes[index].description = req.body.description;
    res.status(200).json({
        message: `note's description of index: ${index} updated`
    })
})

module.exports = app;