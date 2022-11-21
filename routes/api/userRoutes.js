const router = require('express').Router();

const {
    
    createNewUser,
    getUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID,
    addNewFriend,
    deleteFriend

} = require('../../controllers/userController');

router.route('/').post(createNewUser);
router.route('/').get(getUsers);
router.route('/:id').get(getUserByID);


module.exports = router;