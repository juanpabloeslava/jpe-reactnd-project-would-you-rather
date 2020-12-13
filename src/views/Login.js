import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// actions
import { setAuthedUser, userLogOut } from '../actions/authedUser'
// reducers
import { connect } from 'react-redux'
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
        
        if ( user === 'logout') {
            this.props.dispatch(userLogOut())
        } else {
            this.props.dispatch(setAuthedUser(user))
        }
    }

    render() {
        console.log('props in login view: ', this.props)
        const { classes, authedUser } = this.props
        const { user } = this.state

        return (
            <div className='view-container'>
                <h3 className='center'>Log in</h3>
                <div className='login-container'>
                    {
                        authedUser === null
                        ? <p>You are currently not logged in. Please select an user.</p>
                        : <div>
                            {/* this will need to be changed to the user's name */}
                            <p>Hi there {authedUser}.</p> 
                            <p>You can switch accounts whenever you like, just select another user.</p>
                        </div>
                    }
                    <FormControl className={classes.formControl}>
                        <InputLabel>User</InputLabel>
                        <Select value={user} onChange={this.handleChange}>
                            <MenuItem value='sarahedo'>Sarah Edo</MenuItem>
                            <MenuItem value='tylermcginnis'>Tyler McGinnis</MenuItem>
                            <MenuItem value='johndoe'>John Doe</MenuItem>
                            <MenuItem value='logout'>No user</MenuItem>
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

const mapStateToProps = ( state ) => {
    return { 
      authedUser: state.authedUser
    }
  }

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(withRouter(Login))