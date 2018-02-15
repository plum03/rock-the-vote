import axios from "axios"
const url = "/issues/"


export function getIssues() {
    console.log("getting issues")
    return (dispatch) => {
        axios
        .get(url)
        .then((response) => {
            console.log(response.data)
            dispatch({
                type: "GET_ISSUES",
                issue: response.data
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function addIssue(newIssue) {
    return (dispatch) => {
        axios
        .post(url, newIssue)
        .then((response) => {
            console.log(response)
            let {data} = response
            dispatch({
                type: "ADD_ISSUE",
                data
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function editIssue(editedIssue, id) {
    return (dispatch) => {
        console.log(editedIssue)
        axios
        .put(url + id, editedIssue)
        .then((response) => {
            console.log(response)
            dispatch({
                type: "EDIT_ISSUE",
                editedIssue: response.data,
                id
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
        .delete(url + id, id)
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

// export function upVote(issue) {
//     let updateVote = {upVotes: issue.upVotes + 1}
//     return (dispatch) => {
//         axios
//         .put(url + issue._id, updateVote)
//         .then(response => {
//             dispatch({
//                 type: "UP_VOTE",
//                 issue: response.data
//             })
//         })
//     }
// }

// export function downVote(issue) {
//     let updateVote = {upVotes: issue.upVotes - 1}
//     return (dispatch => {
//         axios
//         .put(url + issue._id, updateVote)
//         .then((response) => {
//             dispatch({
//                 type: "DOWN_VOTE",
//                 issue: response.data
//             })
//         })
//     })
// }

// ISSUES REDUCER

export default function issuesReducer(prevState = {data: [], loading: true}, action) {
    switch(action.type) {
        case "GET_ISSUES":
            return {
                data: action.issue,
                loading: false
            }

        case "ADD_ISSUE":
            return {
                data: [...prevState.data, action.data],
                loading: false
            }

        case "EDIT_ISSUE":
            return {
                data: prevState.data.map((issue) => {
                    if (issue._id === action.id) {
                        return action.editedIssue
                    } else {
                        return issue
                    }
                }),
                loading: false
            }

        case "DELETE_ISSUE":
            return {
                data: prevState.data.filter((issue) => {
                    return issue._id !== action.id
                }),
                loading: false
            }

        // case "UP_VOTE":
        //     let upVoted = [...prevIssues.issues].map(issue => {
        //         if (issue._id === action.issue._id) {
        //             return action.issue
        //         } else {
        //             return issue
        //         }
        //     })
        //     return {
        //         issues: upVoted
        //     }
        
        // case "DOWN_VOTE":
        //     let downVoted = [...prevIssues.issues].map((issue) => {
        //         if (issue._id === action.issue._id) {
        //             return action.issue
        //         } else {
        //             return issue
        //         }
        //     })
        //     return { issues: downVoted}

        default:
            return prevState
    }
}