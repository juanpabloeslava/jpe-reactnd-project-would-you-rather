import React, { Component } from 'react'
import compose from 'recompose/compose'
import PollListItem from '../components/PollListItem';
// reducers
import { connect } from 'react-redux'
// material imports
import { AppBar, Tab } from '@material-ui/core';
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
        const { users, polls, authedUser } = this.props

        const allPollIDs = Object.keys(polls) 
        // active user
        const activeUser = authedUser ? users[authedUser] : null
        // list of poll ids the user has answered, sorted from newer to oldest
        const answeredPolls = Object.keys(activeUser.answers).sort( (a, b) => (
            polls[b].timestamp - polls[a].timestamp
        ))
        // polls user hasn't answered (an array of ids that doesn't include the ones already answered. This is already sorted, since it uses allPolls as its base)
        const unansweredPolls = allPollIDs.filter( poll => !answeredPolls.includes(poll))

        return (
            <div className='list-container'>
                <h3 className='center'>Ongoing Polls</h3>
                <div className='poll-tabs-container'>
                    <TabContext value={value}>
                        <AppBar position="static">
                            <TabList onChange={this.handleTabChange}>
                                <Tab label="Unanswered Polls" value='0' />
                                <Tab label="Answered Polls" value='1' />
                            </TabList>
                        </AppBar>
                        <TabPanel value='0'>
                            <div>
                                <ul className='no-padding no-margin'>
                                    {
                                        unansweredPolls.map( poll => (
                                            <PollListItem key={poll}/>
                                        ))
                                    }
                                    {/* <PollListItem />
                                    <PollListItem />
                                    <PollListItem /> */}
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value='1'>
                            <div>
                                <ul className='no-padding no-margin'>
                                    {
                                        answeredPolls.map( poll => (
                                            <PollListItem key={poll}/>
                                        ))
                                    }
                                    {/* <PollListItem />
                                    <PollListItem /> */}
                                </ul>
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
    return {
        authedUser,
        polls,
        users
    }
}

export default compose(
    connect(mapStateToProps)
)(PollList)