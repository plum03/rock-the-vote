import axios from "axios";
const url = "http://localhost:5050/issues/";

export function addComment(id, text) {
    return (dispatch) => {
        axios
            .post(url + id + "/comments", text)
            .then((response) => {
                dispatch({type: "ADD_COMMENT", commentedIssue: response.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export default function addComment(prevState = {issues: []}, action) {
    switch (action.type) {
        
        case "ADD_COMMENT":
        let commentedIssue = [...prevState.issues].map(issue => {
            if (issue._id === action.commentedIssue._id) {
                return action.commentedIssue;
            } else {
                return issue
            }
        })
        return {
            issues: commentedIssue
        }

        default:
            return prevState
}}
