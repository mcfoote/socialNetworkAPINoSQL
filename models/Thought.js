const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        //set default
        //getter to format on query
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        type: Array[docs],
    },
});

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;