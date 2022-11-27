const { User } = require('../models');

const userController = {

    createNewUser({body}, res) {

        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));

    },

    getUsers(req, res) {

        User.find({})
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

        User.findOne({_id: params.id })
        .populate({path:'thoughts', select:'-__v'})
        .populate({path:'friends', select:'-__v'})
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message:'Cannot find user with matching ID'});
                return; 
            }res.json(dbUserData)
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

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