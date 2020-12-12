import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
// compose is to add withrouter, withStyles, and connect together
import compose from 'recompose/compose'

class NavBar extends Component {
    
    state = {}

    toHome = event => this.props.history.push(`/`)
    toAdd = event => this.props.history.push(`/add`)
    toLeaderboard = event => this.props.history.push(`/leaderboard`)
    toLogin = event => this.props.history.push(`/login`)
    
    render() {
        // by using withStyles(), it passes the defined styles as a property of the classes object, which is passed down to the Component as a prop 
        const { classes } = this.props
        
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Button onClick={() => this.toHome()} className={classes.navItems} color="inherit">
                            Home
                        </Button>
                        <Button onClick={() => this.toAdd()} className={classes.navItems} color="inherit" >
                            Add Poll
                        </Button>
                        <Button onClick={() => this.toLeaderboard()} className={classes.navItems} color="inherit">
                            Leaderboard
                        </Button>
                        <Typography className={classes.space}/>
                        <IconButton onClick={() => this.toLogin()} color="inherit" className={classes.login}>
                            LOGIN
                            <AccountCircle className={classes.loginLogo}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    navItems: {
        marginRight: '1.5rem'
    },
    space: {
        flexGrow: 1,
    },
    login: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: '0.875rem',
        fontWeight: '500',
        lineHeight: '1.75',
        borderRadius: '4px',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase'
    },
    loginLogo: {
        marginLeft: '1rem'
    }
});

export default compose(
    withStyles(styles, { withTheme: true })
)(withRouter(NavBar))