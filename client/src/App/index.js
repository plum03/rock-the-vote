import React from "react"
import Form from "./Form.js"
import IssuesList from "./IssuesList"

function App(props) {
    return (
        <div>
            <Form add clear />
            <IssuesList />
        </div>
    )
}

export default App