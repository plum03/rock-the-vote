const mongoose = require('mongoose')
const Schema = mongoose.Schema


const IssueSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model("Issue", IssueSchema)