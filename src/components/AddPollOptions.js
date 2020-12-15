import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
// actions
import { addPollAsync } from '../actions'
// reducers
import { connect } from 'react-redux'
// material UI imports
import { TextField, FormControl, Button } from '@material-ui/core';

class AddPollOptions extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        submited: false
    }

    toHome = () => this.props.history.push(`/`)

    handleChange = (event) => {
        if (event.target.name === 'optionOne' ) {
            this.setState(() => {
                return { optionOneText: event.target.value };
            });
        } else if (event.target.name === 'optionTwo' ) {
            this.setState(() => {
                return { optionTwoText: event.target.value };
            });
        }
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const { optionOneText, optionTwoText } = this.state
        const { authedUser, addPollAsync } = this.props
        const author = authedUser
        const newPoll = {
            optionOneText,
            optionTwoText,
            author
        }
        // dispatch addPoll action
        addPollAsync(newPoll)
        console.log('new poll submited: ', newPoll)
        // go home
        this.toHome();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* modify FormControl width to 100% otherwise all goes to shit */}
                <FormControl component="fieldset" className='MuiFormControl-fullWidth'>
                    <Fragment>
                        <TextField 
                            required
                            name='optionOne'
                            label='First option'
                            placeholder='Enter your first option'
                            onChange={this.handleChange}/>
                        <div className='poll-input-divider'></div>
                        <TextField 
                            required
                            name='optionTwo'
                            label='Second option'
                            placeholder='Enter your second option'
                            onChange={this.handleChange}/>
                        <div className='add-poll-btns'>
                            <div>
                                <Button type="submit" className='MuiButton-outlined'>Submit Poll</Button>
                            </div>
                            <div>
                                <Button onClick={this.toHome} className='MuiButton-contained'>Cancel</Button>
                            </div>
                        </div>
                    </Fragment>
                </FormControl>
            </form>
        );
    }

}

const mapStateToProps = ({ authedUser }) => {
        return {
            authedUser
        }
    }

export default withRouter(
    connect(mapStateToProps, {addPollAsync})(AddPollOptions)
)