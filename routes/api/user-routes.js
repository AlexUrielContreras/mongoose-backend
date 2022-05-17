const router = require('express').Router();
const { findAllUsers, createUser, findSingleUser, findAndUpdate, findAndDelete, addFriend, removeFriend } = require('../../controller/user-controller');

router
    .route('/')
    .get(findAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(findSingleUser)
    .put(findAndUpdate)
    .delete(findAndDelete)

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)



module.exports = router