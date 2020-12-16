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
        // location is passed when redirected from another comp as an object. Info on the link
        // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md#to-object
        const { activeUser, location } = this.props

        if ( activeUser !== null ) {
            this.props.dispatch(userLogOut())
        } else {
            this.props.dispatch(setAuthedUser(user))
        }

        // go back to where you came from after loggin in
        if (location.state) {
            console.log('login will now go to: ', location.state.referrer)
            this.props.history.push(location.state.referrer)
        }
    }

    logOut = (event) => {
        event.preventDefault()
        this.props.dispatch(userLogOut())
    }

    render() {

        const { classes, activeUser } = this.props
        const { location } = this.props
        console.log('location from leaderboard (in login): ', location)
        const { user } = this.state

        return (
            <div className='view-container'>
                <h3 className='center'>{ activeUser === null ? 'Log in' : `Logged in as ${activeUser.name}`}</h3>
                <div className='login-container'>
                    {
                        activeUser === null
                            ? <div>
                                <p>You are currently not logged in.</p>
                                <p>To continue using the app, please select an user.</p>
                            </div>
                            : <div>
                                <p>Hi there {activeUser.name.split(' ', 1)}.</p>
                                <p>You can switch accounts whenever you like, just select another user.</p>
                            </div>
                    }
                    <FormControl className={classes.formControl}>
                        <InputLabel>User</InputLabel>
                        <Select value={user} onChange={this.handleChange}>
                            <MenuItem value='sarahedo'>Sarah Edo</MenuItem>
                            <MenuItem value='tylermcginnis'>Tyler McGinnis</MenuItem>
                            <MenuItem value='johndoe'>John Doe</MenuItem>
                        </Select>
                        <div className='login-btn'>
                            <div>
                                {
                                    user === '' 
                                        ? <Button disabled fullWidth className='MuiButton-contained'>
                                            Log in
                                        </Button>
                                        : <Button fullWidth onClick={(e) => this.logIn(e)} className='MuiButton-containedPrimary'>
                                            Log in
                                        </Button>
                                }
                            </div>
                            <div>
                                {
                                    activeUser !== null
                                    ? <Button fullWidth onClick={(e) => this.logOut(e)}  className='MuiButton-containedSecondary'>
                                        Log out
                                    </Button>
                                    : null
                                }
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


const mapStateToProps = ({ authedUser, users }) => {

    const activeUser = authedUser === null ? null : users[authedUser]

    return {
        users,
        activeUser
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(withRouter(Login))