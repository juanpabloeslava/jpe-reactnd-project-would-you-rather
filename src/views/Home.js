import React, { Component } from 'react'
// material imports
import {  AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import PollList from '../components/PollList';

class Home extends Component {

    render() {
        return (
            <div className='view-container'>
                <PollList />
            </div>
        )
    }
}



export default Home
