import React, { Component } from 'react'
import AddPollOptions from '../components/AddPollOptions'
import { withRouter } from 'react-router-dom'
// material imports
import { Button } from '@material-ui/core';

class AddQuestion extends Component {

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
        console.log('go to home was clicked')
    }

    render() {

        const { alreadyAnswered, answer } = this.state

        return (
            <div className='view-container'>
                <h3 className='center'>Create Poll</h3>
                <div>
                    <div className='poll'>
                        <div className='avatar-container'>
                            <img alt='avatar of user' className='avatar' src={`https://gravatar.com/avatar/d7f22e9a1b376b88578391e75204a9b3?s=400&d=robohash&r=x`} />
                        </div>
                        <div className='poll-info'>
                            <div>
                                <span className='user-name'>Tyler is asking:</span>
                                <p> Would you rather: </p>
                                <div className='add-poll-options'>
                                    <AddPollOptions 
                                        toHome={this.toHome}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(AddQuestion)
