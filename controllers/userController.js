const { User } = require('../models');

const userController = {

    createNewUser({body}, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    getUsers(req, res) {
        Users.find({})
        .populate({path:'thoughts', select:'-__v'})
        .populate({path:'friends', select:'-__v'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getUserByID({params}, res) {

    },

    updateUserByID({params}, res) {

    },

    deleteUserByID({params}, res) {

    },

    addNewFriend({params}, res) {

    },

    deleteFriend({params}, res) {

    },

};

module.exports = userController;