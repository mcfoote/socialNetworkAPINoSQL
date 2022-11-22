const router = require('express').Router();

const {
    
    createNewThought,
    getThoughts,
    getThoughtsByID,
    updateThoughtByID,
    createNewThought,
    deleteThoughtByID,
    createNewReaction,
    deleteReaction

} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts);

router.route('/:id').get(getThoughtsByID);
router.route('/:id').put(updateThoughtByID);
router.route('/:id').delete(deleteThoughtByID);

router.route('/:userID').post(createNewThought);

router.route('/:thoughtID/reactions').post(createNewReaction);

router.route('/:thoughtID/reactions/:reactionID').delete(deleteReaction);


module.exports = router;