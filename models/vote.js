const mongoose = require('mongoose')
const voteSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upVote: {
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0
    }
    
    // comments: [mongoose.Schema.Types.ObjectId]


})

module.exports = mongoose.model("Vote", voteSchema)