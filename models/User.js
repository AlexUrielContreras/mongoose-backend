const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        // unique is not a validator just a convenient helper
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            // tells it where the data come will come from
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [ {
        // tells it where the data come will come from
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtual: true
    },
    id: true
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;