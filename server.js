
const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send(["Hello! This is version 0.6"]);
});

app.get('/alluser', (req, res) => {
    userone.find()
        res.json (result);
    });

app.get('*',function (req, res) {
        res.redirect('/');
    });
