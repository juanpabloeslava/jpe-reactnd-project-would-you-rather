import React, { Component } from 'react'
// material imports
import {  AppBar, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import PollList from '../components/PollList';
import Poll from '../components/Poll';


class Home extends Component {

    state = {
        showComp: false
    }

    render() {
        return (
            <div className='view-container'>
                {
                    this.state.showComp 
                        ? <PollList />
                        : <Poll />
                }
            </div>
        )
    }
}



export default Home
