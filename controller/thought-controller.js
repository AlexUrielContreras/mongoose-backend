const { Thought, User } = require('../models');

const thoughtController = {

    // Routes to create a new route
    createThought({ params, body }, res) {
        console.log(body)
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userid },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thought found with this id! ' });
                    return
                }
                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // Routes to find all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .then(thoughtData => res.json(thoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // Route to find one thought by id
    getSingleThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thought with this id ' });
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // Route to Update thought
    findAndUpdate({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(updatedData => {
                if (!updatedData) {
                    res.status(404).json({ message: 'No thought found with this id' });
                    return;
                }
                res.json(updatedData)
            })
            .catch(err => {
                console.log(err)
            })
    },
    addReaction({ params, body }, res) {
        console.log(body)
        Thought.findOneAndUpdate({ _id: params.id }, { $push: { reaction: body } }, { new: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thought with this id' })
                    return;
                }
                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // Route to delete a single route
    findAndDelete({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'no Thoughts found with this id' });
                    return;
                }
                res.json(thoughtData);
            })
            .catch(err => {
                console.log(err)
            })
    },

    // Route to delete reation
    deleteReaction({ params }, res) {
        console.log(params)
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reaction: { reactionId: params.reactionId }}}, { new: true })
            .then(thoughtData => {
                if(!thoughtData){
                    return res.status(404).json({message: 'no thought found with that id '})
                }
                res.json(thoughtData)
            })
            .catch(err => {
                console.log(err)
            })
    }
}


module.exports = thoughtController