// server create karna
// server ko config karna

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Learning REST APIs");
})

module.exports = app;