import React, { Component, Fragment } from 'react'
import AddPollOptions from '../components/AddPollOptions'
import { withRouter } from 'react-router-dom'
// reducers
import { connect } from 'react-redux'   

class AddPollForm extends Component {

    render() {

        const { authedUser, users } = this.props
        
        const activeUser = users[authedUser]

        return (
            <Fragment>
                <h3 className='center'>Create Poll</h3>
                <div>
                    <div className='poll'>
                        <div className='avatar-container'>
                            <img alt='avatar of user' className='avatar' src={activeUser.avatarURL} />
                        </div>
                        <div className='poll-info'>
                            <div>
                                <span className='user-name'>You ask:</span>
                                <p> Would you rather: </p>
                                <div className='add-poll-options'>
                                    <AddPollOptions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

// const mapStateToProps = ({ authedUser, polls, users }) => {
const mapStateToProps = ( { authedUser, users } ) => {
    return {
        authedUser,
        users
        // polls,
    }
}

export default withRouter(
    connect(mapStateToProps)(AddPollForm)
)

