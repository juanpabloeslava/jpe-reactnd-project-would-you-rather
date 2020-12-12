import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select, Button } from '@material-ui/core/';
// compose is to add withrouter, withStyles, and connect together
import compose from 'recompose/compose'

class Login extends Component {

    state = {
        user: ''
    }

    handleChange = (event) => {
        this.setState(() => {
            return { user: event.target.value }
        });
    }

    logIn = (event) => {
        event.preventDefault()
        const { user } = this.state
        console.log(`logged in as ${user}`)
    }

    render() {

        const { classes } = this.props
        const { user } = this.state

        return (
            <div className='view-container'>
                <h3 className='center'>Log in</h3>
                <div className='login-container'>
                    <p>You are currently not loged in. Please select an user.</p>
                    <FormControl className={classes.formControl}>
                        <InputLabel>User</InputLabel>
                        <Select value={user} onChange={this.handleChange}>
                            <MenuItem value='sarahedo'>Sarah Edo</MenuItem>
                            <MenuItem value='tylermcginnis'>Tyler McGinnis</MenuItem>
                            <MenuItem value='johndoe'>John Doe</MenuItem>
                            <MenuItem value=''>No user</MenuItem>
                        </Select>
                        <div className='login-btn'>
                            <div>
                                {user === '' && (
                                    <Button disabled fullWidth className='MuiButton-containedPrimary'>
                                        Log in
                                    </Button>
                                )}
                                {user !== '' && (
                                    <Button fullWidth onClick={ (e) => this.logIn(e) } className='MuiButton-containedPrimary'>
                                        Log in
                                    </Button>
                                )}
                            </div>
                        </div>
                    </FormControl>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 260,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});


export default compose(
    withStyles(styles, { withTheme: true })
)(withRouter(Login))