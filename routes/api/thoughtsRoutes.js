const router = require('express').Router();

const {
    
    createNewThought,
    getThoughts,
    getThoughtsByID,
    updateThoughtByID,
    deleteThoughtByID,
    createNewReaction,
    deleteReaction

} = require('../../controllers/thoughtsController');

router.route('/').post(createNewThought);
router.route('/').get(getThoughts);
router.route('/:id').get(getThoughtsByID);


module.exports = router;