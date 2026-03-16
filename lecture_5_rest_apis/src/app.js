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

module.exports = app;