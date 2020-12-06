const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
        min:3
    },
    email: {
        type: String,
        equire: true,
        max: 255,
        min:3
    },
    password: {
        type: String,
        require:true,
        max:1024,
        min:3
    },
    date: {
        type: Date,
        default: Date.now
    }

});

mongoose.exports= mongoose.model ('User',userSchema);