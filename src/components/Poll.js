import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import PollOptions from './PollOptions'
import { Redirect, withRouter, Link } from 'react-router-dom'     // withRouter() passes 'history' to the comp as a prop, even if React Router is not rendering the comp
// reducers
import { connect } from 'react-redux'       
// material imports
import { Button } from '@material-ui/core';

class Poll extends Component {

    render() {

        const { authedUser, polls, users } = this.props
        const id = this.props.match.params.id
        const poll = polls[id]

        // if there isn't a poll or there isn't an authedUser, go to login
        if (poll === undefined || authedUser === undefined) {
            return <Redirect to='/login' />
        }

        const author = users[poll.author]
        const displayName = author.id === authedUser ? 'You' : author.name
        
        // check if this poll has been answered by the authed user
        const totalVotes = poll.optionOne.votes.concat(poll.optionTwo.votes)
        const answered = totalVotes.includes(authedUser) ? true : false

        // which was the answer?
        const activeUser = users[authedUser]
        const thisPollAnswer = activeUser.answers[poll.id]          //outputs either 'optionOne' or 'optionTwo'

        return (
            <div className='list-container'>
                <h3 className='center'>Poll</h3>
                <div>
                    <div className='poll'>
                        <div className='avatar-container'>
                            <img alt={`avatar of ${author.name}`} className='avatar' src={author.avatarURL} />
                        </div>
                        <div className='poll-info'>
                            <div>
                                <span className='user-name'>{displayName} asked</span>
                                <div> {formatDate(poll.timestamp)} </div>
                                <p> Would you rather: </p>
                                <div className='poll-options'>
                                    <PollOptions 
                                        showResult={this.showResult}
                                        optionOne={poll.optionOne.text}
                                        optionTwo={poll.optionTwo.text}/>
                                </div>
                                { answered && (
                                <div>
                                    {/* <p> You chose: </p> */}
                                    <span className='submission-summary'>You would rather { thisPollAnswer === 'optionOne' ? poll.optionOne.text : 'optionTwo' ? poll.optionTwo.text : 'not say' }</span>
                                    <div className='poll-btns'>
                                        <div>
                                            <Button component={Link} to='/' underline='none' className='MuiButton-contained'>Back to Polls</Button>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
    return {
        authedUser,
        polls,
        users
    }
}

export default withRouter(
    connect(mapStateToProps)(Poll)
)
