const { Thought } = require('../models');

const thoughtController = {

    // Routes to create a new route
    createThought({body}, res){
        Thought.create(body)
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err)
        })
    },

    // Routes to find all thoughts
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