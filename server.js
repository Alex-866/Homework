
const express = require('express');
const app = express();

app.listen(27017, () => {
    console.log('Server Started');
});

app.get('/alluser', (req, res) => {
    db.userone.find().pretty() 
        res.send (result);
    });

app.get('*',function (req, res) {
        res.redirect('/');
    });
