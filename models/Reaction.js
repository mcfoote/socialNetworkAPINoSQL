const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: ObjectID,
        //set default
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        //set default
        //getter
    }
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;