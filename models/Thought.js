const { Schema, model, DataTypes } = require('mongoose');

const ReactionSchema = new Schema({
    
    reationId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const ThoughtSchema = new Schema({ 
    
    thought_text: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reaction: [ReactionSchema]
},
{
    toJSON: {
        getters: true,
        virtaul: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.thought.reduce((total, thought) => total + thought.reaction.length + 1, 0)
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;