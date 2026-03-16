// server create karna
// server ko config karna

const express = require('express');
const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.send("Learning REST APIs");
})

app.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log(notes);
    res.send("Note Created");
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index];
    res.send("note deleted successfully");
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    notes[index].description = req.body.description;
    res.send("Description updated");
})

module.exports = app;