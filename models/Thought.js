const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const moment = require('moment');

const thoughtsSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => moment(createdAt).format('MM DD, YYYY [at] hh:mm a'),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
});

const reactionSchema = new Schema({

    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
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
        default: Date.now,
        get: (createAtValue) => moment(createAtValue).format('MM DD, YYYY [at] hh:mm a'),
    }

});

const Thoughts = model('thought', thoughtsSchema);

module.exports = Thoughts;