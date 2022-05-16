const router = require('express').Router();
const { findAllUsers } = require('../../controller/user-controller');

router
    .route('/')
    .get(findAllUsers)


module.exports = router