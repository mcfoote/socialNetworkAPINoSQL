const { Schema, model} = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        //trim
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //email validation
    },
    thoughts: {
        type: Array[_id]
    },
    friends: {
        type: Array[_id]
    }
});