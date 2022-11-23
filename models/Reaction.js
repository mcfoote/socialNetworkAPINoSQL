const { Schema, model } = require('mongoose');
const moment = require('moment');

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

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;