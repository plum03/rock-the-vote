import React, { Component } from 'react'
import {connect} from "react-redux"
import {addIssue} from "../../redux/issues.js"


class AddIssue extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        
        this.setState(prevState => {
            return {
                ...prevState.inputs,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.addIssue(this.state);
        this.setState({
            name: "",
            description: ""
        })

    }

    render() {
        console.log(this.props)
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.inputs}/>
                    <textarea onChange={this.handleChange} name="description" value={this.state.inputs}></textarea>
                    <button type="submit">ADD</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addIssue})(AddIssue);
