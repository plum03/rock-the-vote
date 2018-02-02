var express = require("express")
var votesRouter = express.Router()
var bodyParser = require('body-parser')
var Vote = require('../models/vote.js')

votesRouter.route("/")
// return all votes matching query
    .get((req, res) => {
    Vote.find({}, (err, foundVotes) => {
        if (err) {
            console.error(err)
        } else {
            res.send(foundVotes)
        }
    })
})

// add new vote
    .post((req, res) => {
    let newVote = new Vote(req.body)
    newVote.save((err, savedVote) => {
        if (err) {
            console.error(err);
        } else {
            res.send(savedVote);
        }
    })
})

votesRouter.route("/:id")
// return specific vote
    .get((req, res) => {
    let {id} = req.params
    Vote.findOne({
        _id: id
    }, (err, foundVote) => {
        if (err) {
            console.error(err)
        } else {
            res.send(foundVote)
        }
    })
})
// delete specific vote
    .delete((req, res) => {
    let {id} = req.params
    Vote.findByIdAndRemove(id, (err, removeVote) => {
        if (err) {
            console.error(err)
        } else {
            res.send(removeVote)
        }
    })
})

// update vote
    .put((req, res) => {
    let {id} = req.params
    Vote.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, updateVote) => {
        if (err) {
            console.error(err)
        } else {
            res.send(updateVote)
        }
    })
})

module.exports = votesRouter;