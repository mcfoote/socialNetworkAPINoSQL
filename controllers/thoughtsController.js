const { Thought } = require('../models');

const thoughtsController = {

    createNewThought({params, body}, res) {

        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        }).then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({message: 'Cannot find thoughts with matching ID'});
                return;
            }res.json(dbThoughtsData)
        }).catch(err => res.status(400).json(err));

    },

    getThoughts(req, res) {

        Thought.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    getThoughtsByID({params}, res) {

        Thought.findOne({ _id: params.id })
        .populate({path: 'reactions',select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
            res.status(404).json({message: 'Cannot find thoughts with matching ID'});
            return;
        }res.json(dbThoughtsData)
        }).catch(err => {
            console.log(err);
            res.sendStatus(400);
        });

    },

    updateThoughtByID({params, body}, res) {

    },

    deleteThoughtByID({params}, res) {

    },

    createNewReaction({params, body}, res) {

    },

    deleteReaction({params}, res) {

    }

};

module.exports = thoughtsController;