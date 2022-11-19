const router = require('express').Router();

const {
    createNewUser,
    getUsers,
    getUserByID

} = require('../../controllers/userController');

router.route('/').post(createNewUser);
router.route('/').get(getUsers);
router.route('/:id').get(getUserByID);


module.exports = router;