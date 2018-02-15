import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getIssues} from '../../redux/issues'

import Issue from './Issue'
const myIssue = [];

class IssuesList extends Component {

    componentDidMount() {
        console.log("mounted!")
        console.log(this.props.getIssues())
    }

    render() {
        console.log(this.props)
        let {data} = this.props.issues
        let sortedIssues = []

    //     if (!loading) {
    //         sortedIssues = data.sort((num1, num2) => {
    //             let num1Total = num1.likes-num1.dislikes
    //             let num2Total = num2.likes-num2.dislikes
    //             return num2Total - num1Total
    //         })
    //     }
       
        const IssueComponent = data.map((issue, i) => {
            return <Issue {...issue} key={i}></Issue>
       })

        
        return (
            <div >
                heya
                {IssueComponent}
            </div>
        )
    }
        
        
    }


const mapStateToProps = (state) => {
    return {
        data: state.issue
    }
}

export default connect(state => state, {getIssues})(IssuesList)