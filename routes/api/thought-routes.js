const router = require('express').Router();
const { getAllThoughts } = require('../../controller/thought-controller')

router
    .route('/')
    .get(getAllThoughts)

module.exports = router