import React, { Component } from 'react'
// reducers
import { connect } from 'react-redux'
// material UI imports
import { Avatar, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// compose is to add withrouter, withStyles, and connect together
import compose from 'recompose/compose'

class UserListItem extends Component {

    render() { 
        // 'users' comes from the Store, 'id' and 'index' are passed down as normal props
        const { id, users, index, authedUser } = this.props

        const user = users[id]
        const pollsTaken = Object.keys(user.answers).length
        const pollsAsked = user.questions.length
        const score = pollsTaken + pollsAsked

        // determine ranking
        const ranking = index + 1;
        // highlight active user
        const cellClass = id === authedUser ? this.props.classes.activeUser : this.props.classes.regularUser

        return ( 
            <TableRow>
                <TableCell  className={cellClass} align='center' component="th" scope="row">
                    {ranking}
                </TableCell>
                <TableCell  className={cellClass}>
                    <div className='username-row'>
                        <div className='avatar-container'>
                            <Avatar alt={user.name} src={user.avatarURL}/>
                        </div>
                        {user.name}
                    </div>
                </TableCell>
                <TableCell className={cellClass} align="right">{pollsTaken}</TableCell>
                <TableCell className={cellClass} align="right">{pollsAsked}</TableCell>
                <TableCell className={cellClass} align="right">{score}</TableCell>
            </TableRow>
         );
    }
}

const styles = theme => ({
    table: {
        minWidth: 650,
    },
    activeUser: {
        fontWeight: '800'
    },
    regularUser: {
        fontWeight: 'normal'
    },
});

const mapStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser
    }
}

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps)
)(UserListItem)
