import React, { Component, Fragment } from 'react'
// reducers
import { connect } from 'react-redux'
// material UI imports
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// compose is to add withrouter, withStyles, and connect together
import compose from 'recompose/compose'
import UserListItem from './UserListItem';

class LeaderboardList extends Component {

    render() {
        
        const { userIDs } = this.props

        return (
            <Fragment>
                <h3 className='center'>Leaderboard</h3>
                <div className='user-list-container'>
                    <TableContainer component={Paper}>
                        <Table className={this.props.classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Ranking</TableCell>
                                    <TableCell>User</TableCell>
                                    <TableCell align="right">Polls Taken</TableCell>
                                    <TableCell align="right">Polls created</TableCell>
                                    <TableCell align="right">Final Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userIDs.map((userID) => (
                                    <UserListItem 
                                        index={userIDs.indexOf(userID)}
                                        key={userID}
                                        id={userID}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Fragment>              
        )
    }
}

const styles = theme => ({
    table: {
        minWidth: 650,
    },
});

const mapStateToProps = ({ users }) => {
    // return an array of user ids, already sorted from higher to lower ranking
    const userIDs = Object.keys(users).sort((a, b) => (
        (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
    ))
    
    return {
        userIDs      
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(LeaderboardList)


