import React, { Component } from 'react'
import AddPollOptions from '../components/AddPollOptions'
import AddPollForm from '../components/AddPollForm'
import { Redirect } from 'react-router-dom'
// reducers
import { connect } from 'react-redux'

class AddPoll extends Component {

    render() {

        const { authedUser } = this.props

        return (
            <div className='view-container'>
                {
                    authedUser !== null
                        ? <AddPollForm />
                        : <Redirect    
                        to={{
                            pathname: '/login',
                            state: { referrer: '/add' }
                        }} />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(
    mapStateToProps
)(AddPoll);

