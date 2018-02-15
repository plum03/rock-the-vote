
import React, { Component } from 'react'
import { connect } from "react-redux"

import Form from '../../Form'
import { deleteIssue, editIssue } from '../../../redux/issues'


class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    toggleEdit() {
        this.setState({
            isEditing:
                !this.state.isEditing
        })
    }

    // increment = () => {
    //     this.props.issues.data.map
    //         if id's are the same {
    //             add 1
    //             editissue(this.props.issues.data[i])
    //         }
    // }

    render() {
        console.log(this.props.issues.data)
        let { _id, title, description, editIssue, deleteIssue, likes, dislikes } = this.props
       
        if (this.state.isEditing) {
            return (
                <div >
                    <Form {...this.props} option={{toggle: this.toggleEdit}} />
                    <button onClick={this.toggleEdit}>EDIT</button>
                </div>
            )
        }
        return (
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <span> Likes: {likes} <button onClick={() => editIssue({ likes: likes + 1}, _id)} name="like">&#9829;</button></span>
                    <span> Dislikes: {dislikes} <button onClick={() => editIssue({ dislikes: dislikes + 1}, _id)} name="dislike">&#9760;</button> </span>
                </div>

                <div>
                    <button onClick={this.toggleEdit}>SAVE CHANGES</button>
                    <button onClick={() => deleteIssue(_id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default connect(state => state, {deleteIssue, editIssue})(Issue);
