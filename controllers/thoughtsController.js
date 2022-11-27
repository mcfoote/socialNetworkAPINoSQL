const { Thought } = require('../models');

const thoughtsController = {

    createNewThought({params, body}, res) {

        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        }).then(thoughtsDB => {
            if(!thoughtsDB) {
                res.status(404).json({message: 'Cannot find thought with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    },

    getThoughts(req, res) {

        Thought.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(thoughtsDB => res.json(thoughtsDB))
        .catch(err => res.status(400).json(err));

    },

    getThoughtsByID({params}, res) {

        Thought.findOne({ _id: params.id })
        .populate({path: 'reactions',select: '-__v'})
        .select('-__v')
        .then(thoughtsDB => {
            if(!thoughtsDB) {
                res.status(404).json({message: 'Cannot find thought with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    },

    updateThoughtByID({params, body}, res) {

        Thought.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .populate({path: 'reactions', select: '-__v'})
        .select('-___v')
        .then(thoughtsDB => {
            if (!thoughtsDB) {
                res.status(404).json({message: 'Cannot find thought with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    },

    deleteThoughtByID({params}, res) {

        Thought.findOneAndDelete({_id: params.id})
        .then(thoughtsDB => {
            if (!thoughtsDB) {
                res.status(404).json({message: 'Cannot find thought with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    },

    createNewReaction({params, body}, res) {

        Thought.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(thoughtsDB => {
            if (!thoughtsDB) {
                res.status(404).json({message: 'Cannot find reaction with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    },

    deleteReaction({params}, res) {

        Thought.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true})
        .then(thoughtsDB => {
            if (!thoughtsDB) {
                res.status(404).json({message: 'Cannot find reaction with matching ID'});
                return;
            }res.json(thoughtsDB);
        }).catch(err => res.status(400).json(err));

    }

};

module.exports = thoughtsController;