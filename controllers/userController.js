const { User } = require('../models');

const userController = {

    createNewUser({body}, res) {

        User.create(body)
        .then(userDB => res.json(userDB))
        .catch(err => res.status(400).json(err));

    },

    getUsers(req, res) {

        User.find({})
        .populate({path:'thoughts', select:'-__v'})
        .populate({path:'friends', select:'-__v'})
        .select('-__v')
        .then(userDB => res.json(userDB))
        .catch(err => res.status(400).json(err));

    },

    getUserByID({params}, res) {

        User.findOne({_id: params.id })
        .populate({path:'thoughts', select:'-__v'})
        .populate({path:'friends', select:'-__v'})
        .select('-__v')
        .then(userDB => {
            if(!userDB) {
                res.status(404).json({message:'Cannot find user with matching ID'});
                return; 
            }res.json(userDB);
        }).catch(err => res.status(400).json(err));

    },

    updateUserByID({params}, res) {

        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(userDB => {
            if(!userDB) {
                res.status(404).json({message: 'Cannot find user with matching ID'});
                return;
            }res.json(userDB);
        }).catch(err => res.status(400).json(err));
    },

    deleteUserByID({params}, res) {

        User.findOneAndDelete({_id: params.id})
        .then(userDB => {
            if(!userDB) {
                res.status(404).json({message: 'Cannot find user with matching ID'});
                return;
            }res.json(userDB);
        }).catch(err => res.status(400).json(err));

    },

    addNewFriend({params}, res) {

        User.findOneAndUpdate({_id: params.id}, {$push: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then(userDB => {
            if (!userDB) {
                res.status(404).json({message: 'Cannot find user with matching ID'});
                return;
            }res.json(userDB);
        }).catch(err => res.status(400).json(err));

    },

    deleteFriend({params}, res) {

        User.findOneAndUpdate({_id: params.id}, {$pull: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(userDB => {
            if(!userDB) {
                res.status(404).json({message: 'Cannot find user with matching ID'});
                return;
            }res.json(userDB);
        }).catch(err => res.status(400).json(err));

    },

};

module.exports = userController;