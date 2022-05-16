const router = require('express').Router();
const { getAllThoughts, createThought } = require('../../controller/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

module.exports = router