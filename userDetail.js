const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    ic_number:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },

    mobile:{
        type: String,
        required: true
    },

    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }


});
// { timestamp: true });
     // this timestamp will automatic generate a time for the creation.


module.exports = mongoose.model('userD', userDetailSchema);