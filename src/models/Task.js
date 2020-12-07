const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true,
        min:3
    },
    description: {
        type:String,
        max: 255
    },
    date: {
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

});

module.exports= mongoose.model ('Task',taskSchema);