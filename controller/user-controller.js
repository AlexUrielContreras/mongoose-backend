const { User } = require('../models');

const userController =  {

    findAllUsers(req, res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    }
}



module.exports =  userController