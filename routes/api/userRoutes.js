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

router.route('/').get(getUsers);
router.route('/').post(createNewUser);

router.route('/:id').get(getUserByID);
router.route('/:id').put(updateUserByID);
router.route('/:id').delete(deleteUserByID);

router.route('/:id/friends/:friendID').post(addNewFriend);
router.route('/:id/friends/:friendID').delete(deleteFriend);


module.exports = router;