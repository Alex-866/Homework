
const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const connectionString = 'mongodb88://mongo:27017/userone';

mongoose
    .connect(connectionString, {useNewUrlParser: true })
    .catch (e => {
        console.error('Connection error', e.message)
    });

app.listen(8080, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send(["Hello! This is version 0.6"]);
});

const db = mongoose.connection
app.get('/alluser', (req, res) => {
    userone.find()
        res.json (result);
    });

app.get('*',function (req, res) {
        res.redirect('/');
    });

    module.exports = db