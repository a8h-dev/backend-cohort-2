const express = require('express');

const app = express(); // server instance create

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/about', (req, res) => {
    res.send("This is about page");
})

app.get('/home', (req, res) => {
    res.send("This is Home Page");
})

app.listen(3000) // server start
// 8080
// 3000
// 8000
// 7000
// 5193