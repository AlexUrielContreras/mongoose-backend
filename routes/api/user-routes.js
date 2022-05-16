const router = require('express').Router();
const { findAllUsers, createUser, findSingleUser, findAndUpdate, findAndDelete } = require('../../controller/user-controller');

router
    .route('/')
    .get(findAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(findSingleUser)
    .put(findAndUpdate)
    .delete(findAndDelete)

module.exports = router