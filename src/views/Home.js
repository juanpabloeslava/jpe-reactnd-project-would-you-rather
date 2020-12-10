import React, { Component } from 'react'
// material imports
import {  AppBar,  } from '@material-ui/core';
import { TabContext, TabList, Tab, TabPanel } from '@material-ui/lab';
class Home extends Component {

    render() {
        
        return (
            <div>
                <h2>Home</h2>         
                <div className='list-container'>
                    <h3>Ongoing Polls</h3>
                    <TabContext>
                        <AppBar position="static">
                            <TabList>
                                <Tab label="Answered Questions" value="1" />
                                <Tab label="Unanswered Questions" value="2" />    
                            </TabList>
                        </AppBar>
                        <TabPanel value="1">Answered Questions Panel</TabPanel>
                        <TabPanel value="2">Unanswered Questions Panel</TabPanel>
                    </TabContext>
                </div>
            </div>
        )
    }
}

export default Home
