import React, { Component, Fragment } from 'react'
import AddPollOptions from '../components/AddPollOptions'
import { withRouter } from 'react-router-dom'
// material imports
import { Button } from '@material-ui/core';

class AddPollForm extends Component {

    render() {

        return (
            <Fragment>
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


export default withRouter(AddPollForm)
