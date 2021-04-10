
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// Connect to database - mongoDB
const dbURI = 'mongodb+srv://DadKid:6zUdIePh2hp0rIdu@cluster0.32o67.mongodb.net/DevOps_HomeWork?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then (() => app.listen(8080, () => console.log('DataBase connected and Server Started')))
    // .then ((result) => console.log('DataBase connected')) // use this line to test whether is it connected to db before join app.listen together.
    .catch ((err) => console.log(err));

app.use(express.json());


/* const userDetailsRouter = require('userDetails');
app.use('/userDetails', userDetailsRouter); */

// mongoose and mongo sandbox routes
/* const UserDetail = require('./models/userDetail');
/* app.get('/add-user', (req, res) => {
    const userDetail = new UserDetail ({
        name: "Mong",
        ic_number: "S22558885E",
        email: "janewong@gmail.com",
        mobile: "852653265"
});
    userDetail.save()
        .then ((result) => {
            res.send(result);
        })
        .catch ((err) => {
            console.log(err);
        });
}); */

const UserDetail = require('userDetail');
app.get('/all-user', (req, res) =>{
    UserDetail.find() 
        .then ((result) => {
            res.send(result);
        })
        .catch ((err) => {
            console.log(err);
        });
        
});

/* const UserDetail = require('./models/userDetail');
app.get('/single-user', (req, res) =>{
    UserDetail.findById('60707666cf335447289c1a4c') 
        .then ((result) => {
            res.send(result);
        })
        .catch ((err) => {
            console.log(err);
        });
        
}); */

