var express = require("express")
var issuesRouter = express.Router()
var bodyParser = require('body-parser')
var Issue = require('../models/issue.js')

issuesRouter.route("/")
// return all issues matching query
    .get((req, res) => {
    Issue.find({}, (err, foundIssues) => {
        if (err) {
            console.error(err)
        } else {
            res.send(foundIssues)
        }
    })
})

// add new issue
    .post((req, res) => {
    let newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            console.error(err);
        } else {
            res.send(savedIssue);
        }
    })
})

issuesRouter.route("/:id")
// return specific issue
    .get((req, res) => {
    let {id} = req.params
    Issue.findOne({
        _id: id
    }, (err, foundIssue) => {
        if (err) {
            console.error(err)
        } else {
            res.send(foundIssue)
        }
    })
})
// delete specific issue
    .delete((req, res) => {
    let {id} = req.params
    Issue.findByIdAndRemove(id, (err, removeIssue) => {
        if (err) {
            console.error(err)
        } else {
            res.send(removeIssue)
        }
    })
})

// update issue
    .put((req, res) => {
    let {id} = req.params
    Issue.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, updateIssue) => {
        if (err) {
            console.error(err)
        } else {
            res.send(updateIssue)
        }
    })
})

module.exports = issuesRouter;