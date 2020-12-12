import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import PollOptions from './PollOptions'
import { withRouter } from 'react-router-dom'
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

        return (
            <div className='list-container'>
                <h3 className='center'>Poll</h3>
                <div>
                    <div className='poll'>
                        <div className='avatar-container'>
                            <img className='avatar' src={`https://gravatar.com/avatar/90e832b87dc32a1741b5e30afd452824?s=400&d=robohash&r=x`} />
                        </div>
                        <div className='poll-info'>
                            <div>
                                <span className='user-name'> Sarah asked</span>
                                <div> {formatDate(1468479767190)} </div>
                                <p> Would you rather: </p>
                                <div className='poll-options'>
                                    <PollOptions 
                                        showResult={this.showResult}
                                        optionOne='have horrible short term memory'
                                        optionTwo='have horrible long term memory'/>
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
                                            <Button type="submit" className='MuiButton-containedPrimary'>Next Poll</Button>
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


export default withRouter(Poll)
