import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
// material UI imports
import { TextField, FormControl, Button } from '@material-ui/core';

class AddPollOptions extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        submited: false
    }

    handleChange = (event) => {
        if (event.target.name === 'optionOne' ) {
            this.setState(() => {
                return { optionOne: event.target.value };
            });
        } else if (event.target.name === 'optionTwo' ) {
            this.setState(() => {
                return { optionTwo: event.target.value };
            });
        }
    };


    handleSubmit = (event) => {
        event.preventDefault();
        // const { optionOne, optionTwo } = this.state
        console.log('new poll submited!')
        // temporal: just go to home and do nothing
        this.props.toHome();
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
                                <Button onClick={ () => this.props.toHome()} className='MuiButton-contained'>Cancel</Button>
                            </div>
                        </div>
                    </Fragment>
                </FormControl>
            </form>
        );
    }

}

export default withRouter(AddPollOptions)
