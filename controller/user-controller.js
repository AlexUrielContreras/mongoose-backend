const { User } = require('../models');

const userController =  {

    // Route to create a new user
    createUser({body}, res){
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
        })
    },

    // Route to find all the users
    findAllUsers(req, res) {
        User.find({}).select('-__v')
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    
    // Route to find one user by id
    findSingleUser({ params }, res){
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        }).populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(userData => {
            if (!userData){
                res.status(404).json({ message: 'No user found with that id'})
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err)
        })
    },

    // Route to update a User
    findAndUpdate({params, body}, res){
        User.findOneAndUpdate({ _id: params.id}, body ,{ new: true})
        .then(userData => {
            if (!userData){
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(userData)
        })
        .catch(err => {
            console.log(err)
        })
    },

    // Route to delete a User
    findAndDelete({ params }, res) {
        User.findOneAndDelete({ _id: params.id }, { new: true })
        .then(userData => {
            if (!userData){
                res.status(404).json({ message: 'No user with that id'})
                return;
            }
            res.json(userData)
        }).catch(err => {
            console.log(err)
        })
    },

    // Route to add a friend to friend list
    addFriend({params}, res){
        User.findOneAndUpdate({ _id: params.userId}, { $push : { friends: params.friendId}}, { new: true})
        .then(userData => {
            res.json(userData)
        }).catch(err => {
            console.log(err)
        })
    },
    // Route to remove Friend
    removeFriend({params},res){
        console.log(params)
        User.findOneAndUpdate({_id: params.userId}, { $pull: { friends: params.friendId }}, { new: true})
        .then(userData => {
            res.json(userData)
        }).catch(err => {
            console.log(err)
        })
    }
       
    
}



module.exports =  userController