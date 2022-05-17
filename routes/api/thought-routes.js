const router = require('express').Router();
const { getAllThoughts, createThought, getSingleThought, findAndUpdate,findAndDelete, addReaction, deleteReaction } = require('../../controller/thought-controller')

router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:id')
    .get(getSingleThought)
    .delete(findAndDelete)
    .put(findAndUpdate)

router
    .route('/:userid')
    .post(createThought)

router
    .route('/:id/reaction')
    .post(addReaction)  
    
router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(deleteReaction)

module.exports = router