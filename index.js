const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require('./config')
// const cors = require('cors') -> added proxy to client/package.json
const issuesRouter = require('./routes/issues.js')
const commentSchema = require('./routes/comments')

const app = express()

// Middleware
app.use(bodyParser.json())
// app.use(cors())

// Routes
app.use("/issues", issuesRouter)
app.use("/comments", commentSchema)


mongoose.connect('mongodb://localhost:27017/rockthevote', () => {
    console.log("You are now connected to MongoDB")
})

app.listen(config.port, () => {
    console.log("Listening on port " + config.port)
})