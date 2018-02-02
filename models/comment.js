const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
    },
    text: String
})

module.exports = mongoose.model("Comment", commentSchema)