const express = require("express")
const issuesRouter = express.Router()
const bodyParser = require('body-parser')
const Issue = require('../models/issue.js');

issuesRouter.route("/")
// return all issues matching query
    .get((req, res) => {
    Issue.find((err, foundIssues) => {
        if (err) {
            return res.status(500).send(err)
        } 
        return res.send(foundIssues)
        
    })
})

// add new issue
    .post((req, res) => {
    let newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            return res.status(500).send(err)
        } 
        return res.send(savedIssue)
    })
})

issuesRouter.route("/:id")
// return specific issue
    .get((req, res) => {
    let {id} = req.params
    Issue.findById(id, (err, foundIssue) => {
        if (err) {
            return res.status(500).send(err)
        } 
        return res.send(foundIssue)
    })
})

    .delete((req, res) => {
    let {id} = req.params
    Issue.findByIdAndRemove(id, (err, removeIssue) => {
        if (err) {
            return res.status(500).send(err)
        } 
            //remove all comments belonging to this issue
            // Comment.remove({
            //     issueId: id
            // }, (err, removedComments) => {
                //handle err here
                // send back to client
        return res.send(removeIssue)
    })
})

// update issue
    .put((req, res) => {
    let {id} = req.params
    Issue.findByIdAndUpdate(id, req.body, {new: true}, (err, updateIssue) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.send(updateIssue)
    })

})

module.exports = issuesRouter;