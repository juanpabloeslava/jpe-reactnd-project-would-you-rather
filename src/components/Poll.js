import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import PollOptions from './PollOptions'
import { withRouter } from 'react-router-dom'
// reducers
import { connect } from 'react-redux'
// material imports
import { Button } from '@material-ui/core';

class Poll extends Component {

    state = {
        alreadyAnswered: false,
        answer: ''
    }

    showResult = (answer)  => {
        this.setState(() => {
            return { 
                alreadyAnswered: true,
                answer
            };
        });
    }

    toHome = () => {
        // By using withRouter() down by connect(), it passes history to the comp as props even though React Router is not rendering the comp. 
        this.props.history.push(`/`)
    }

    render() {

        const { alreadyAnswered, answer } = this.state
        const { authedUser, polls, users } = this.props
        const id = this.props.match.params.id

        const poll = polls[id]
        const author = users[poll.author]
        const displayName = author.id === authedUser ? 'You' : author.name
        

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
                                { alreadyAnswered && (
                                <div>
                                    {/* <p> You chose: </p> */}
                                    <span className='submission-summary'>You would rather {answer}</span>
                                    <div className='poll-btns'>
                                        <div>
                                            <Button onClick={ () => this.toHome()} className='MuiButton-contained'>Back to Polls</Button>
                                        </div>
                                        <div>
                                            <Button className='MuiButton-containedPrimary'>Next Poll</Button>
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
