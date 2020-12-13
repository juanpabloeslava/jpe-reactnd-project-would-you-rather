import React, { Component } from 'react'
// reducers
import { connect } from 'react-redux'
// material UI imports
import { Avatar, TableCell, TableRow } from '@material-ui/core';
// compose is to add withrouter, withStyles, and connect together
import compose from 'recompose/compose'

class UserListItem extends Component {

    render() { 
        // 'users' comes from the Store, 'id' and 'index' are passed down as normal props
        const { id, users, index } = this.props
        const user = users[id]

        const pollsTaken = Object.keys(user.answers).length
        const pollsAsked = user.questions.length
        const score = pollsTaken + pollsAsked

        const ranking = index + 1;

        return ( 
            <TableRow>
                <TableCell align='center' component="th" scope="row">{ranking}</TableCell>
                <TableCell>
                    <div className='username-row'>
                        <div className='avatar-container'>
                            <Avatar alt={user.name} src={user.avatarURL}/>
                        </div>
                        {user.name}
                    </div>
                </TableCell>
                <TableCell align="right">{pollsTaken}</TableCell>
                <TableCell align="right">{pollsAsked}</TableCell>
                <TableCell align="right">{score}</TableCell>
            </TableRow>
         );
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default compose(
    connect(mapStateToProps)
)(UserListItem)
