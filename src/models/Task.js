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
    }
    /*,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    */

});

module.exports= mongoose.model ('Task',taskSchema);