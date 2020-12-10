import React, { Component } from 'react'
// material imports
import {  AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
class Home extends Component {

    state = {
        value: 0
    }

    handleTabChange = (e, val) => {
        this.setState(() => {
            return {
                value: val
            };
        });
    }

    render() {

        const { value } = this.state
        const { classes } = this.props

        return (
            <div className='view-container'>
                <h2>Home</h2>
                <div className='list-container'>
                    <h3>Ongoing Polls</h3>
                    <div className={classes.root}>
                        <TabContext value={value}>
                            <AppBar position="static">
                                <TabList centered onChange={this.handleTabChange}>
                                    <Tab label="Uanswered Questions" value={0}/>
                                    <Tab label="Answered Questions" value={1}/>
                                </TabList>
                            </AppBar>
                            <TabPanel value={0}>
                                <div>
                                    <ul>
                                        <li>Question 1</li>
                                        <li>Question 2</li>
                                        <li>Question 3</li>
                                        <li>Question 4</li>
                                        <li>Question 5</li>
                                        <li>Question 6</li>
                                    </ul>
                                </div>
                            </TabPanel>
                            <TabPanel value={1}>
                                <div>
                                    <ul>
                                        <li>Question 5</li>
                                        <li>Question 6</li>
                                        <li>Question 7</li>
                                        <li>Question 8</li>
                                        <li>Question 9</li>
                                        <li>Question 10</li>
                                    </ul>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </div>
                </div>
            </div>
        )
    }
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

export default withStyles(useStyles, {withTheme: true})(Home)
