import React, { Component } from 'react'
import PollListItem from '../components/PollListItem';
// material imports
import {  AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';


class PollList extends Component {

    state = {
        // value must be a string otherwise <TabContext/> throws an error
        value: '0'
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

        return (
                <div className='list-container'>
                    <h3 className='center'>Ongoing Polls</h3>
                    <div className='poll-tabs-container'>
                        <TabContext value={value}>
                            <AppBar position="static">
                                <TabList onChange={this.handleTabChange}>
                                    <Tab label="Unanswered Polls" value='0'/>
                                    <Tab label="Answered Polls" value='1'/>
                                </TabList>
                            </AppBar>
                            <TabPanel value='0'>
                                <div>
                                    <ul className='no-padding no-margin'>
                                        <PollListItem temp='1'/>
                                        <PollListItem temp='2'/>
                                        <PollListItem temp='3'/>
                                        <PollListItem temp='4'/>
                                    </ul>
                                </div>
                            </TabPanel>
                            <TabPanel value='1'>
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

export default PollList
