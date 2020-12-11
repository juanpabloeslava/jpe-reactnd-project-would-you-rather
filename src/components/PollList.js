import React, { Component } from 'react'
// material imports
import {  AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import PollListItem from '../components/PollListItem';
class PollList extends Component {

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
                <div className='list-container'>
                    <h3 className='center'>Ongoing Polls</h3>
                    <div className={classes.root}>
                        <TabContext value={value}>
                            <AppBar position="static">
                                <TabList onChange={this.handleTabChange}>
                                    <Tab label="Uanswered Questions" value={0}/>
                                    <Tab label="Answered Questions" value={1}/>
                                </TabList>
                            </AppBar>
                            <TabPanel value={0}>
                                <div>
                                    <ul className='no-padding no-margin'>
                                        <PollListItem temp='1'/>
                                        <PollListItem temp='2'/>
                                        <PollListItem temp='3'/>
                                        <PollListItem temp='4'/>
                                    </ul>
                                </div>
                            </TabPanel>
                            <TabPanel value={1}>
                                <div>
                                    <ul>
                                        <PollListItem temp='5'/>
                                        <PollListItem temp='6'/>
                                    </ul>
                                </div>
                            </TabPanel>
                        </TabContext>
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

export default withStyles(useStyles, {withTheme: true})(PollList)
