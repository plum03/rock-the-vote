import axios from "axios"
const url = "http://localhost:5050/issues/"


export function loadIssues() {
    return (dispatch) => {
        axios
        .get(url)
        .then((response) => {
            dispatch({
                type: "LOAD_ISSUES",
                issues: response.data
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function addIssue(issueToAdd) {
    return (dispatch) => {
        axios
        .post(url, issueToAdd)
        .then((response) => {
            dispatch({
                type: "ADD_ISSUE",
                newIssue: response.data
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function editIssue(id, editedIssue) {
    return (dispatch) => {
        axios
        .put(url + id, editedIssue)
        .then((response) => {
            dispatch({
                type: "EDIT_ISSUE",
                updatedIssue: response.data

            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function deleteIssue(id) {
    return (dispatch) => {
        axios
        .delete(url + id)
        .then((response) => {
            dispatch({
                type: "DELETE_ISSUE",
                id
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function upVote(issue) {
    const update = {upVotes: issue.upVotes + 1}
    return (dispatch) => {
        axios
        .put(url + issue._id, update)
        .then(response => {
            dispatch({
                type: "UP_VOTE",
                issue: response.data
            })
        })
    }
}


export default function reducer(prevState = {issues: []}, action) {
    switch(action.type) {
        case "LOAD_ISSUES":
            return {
                issues: action.issues
            }

        case "ADD_ISSUE":
            let newIssues = [...prevState.issues];
            newIssues.push(action.newIssue);
            return {
                issues: newIssues
            }

        case "EDIT_ISSUE":
            let editedIssues = [...prevState.issues].map(issue => {
                if (issue._id === action.updatedIssue._id) {
                    return action.updatedIssue
                } else {
                    return issue
                }
            })
            return {
                issues: editedIssues
            }

        case "UP_VOTE":
            let upVoted = [...prevState.issues].map(issue => {
                if (issue._id === action.issue._id) {
                    return action.issue
                } else {
                    return issue
                }
            })
            return {
                issues: upVoted
            }


        case "DELETE_ISSUE":
            let issuesWithOneDeleted = [...prevState.issues].filter(issue => {
                return issue._id !== action.id
            })
            return {
                issues: issuesWithOneDeleted
            }

        default:
            return prevState
    }
}