const { Thought } = require('../models');

const thoughtController = {

    getAllThoughts(req, res){
        Thought.find({})
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
}


module.exports = thoughtController