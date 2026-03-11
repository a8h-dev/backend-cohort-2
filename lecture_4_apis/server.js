const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Backend! What's Up.");
})

app.listen(3000);