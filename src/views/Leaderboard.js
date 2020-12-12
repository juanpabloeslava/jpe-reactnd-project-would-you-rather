import React, { Component } from 'react'
// material UI imports
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Leaderboard extends Component {

    createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    }

    createUser = (ranking, avatarURL, name, pollsTaken, pollsAsked ) => {
        const score = pollsTaken + pollsAsked
        return { ranking, avatarURL, name, pollsTaken, pollsAsked, score }
    }

    render() {

        const userRows = [
            this.createUser(
                1,
                'https://gravatar.com/avatar/53e885e728fb74819fade7a7aaf0d1df?s=400&d=robohash&r=x',
                'Sarah Edo',
                4,
                1
            ),
            this.createUser(
                2,
                'https://gravatar.com/avatar/d7f22e9a1b376b88578391e75204a9b3?s=400&d=robohash&r=x',
                'Tyler McGinnis',
                3,
                2
            ),
            this.createUser(
                3,
                'https://gravatar.com/avatar/90e832b87dc32a1741b5e30afd452824?s=400&d=robohash&r=x',
                'John Doe',
                3,
                2
            )

        ]

        return (
            <div className='view-container'>
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
                                {userRows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">{row.ranking}</TableCell>
                                        <TableCell>
                                            <div className='username-row'>
                                                <div className='avatar-container'>
                                                    <Avatar alt={row.name} src={row.avatarURL}/>
                                                </div>
                                                {row.name}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">{row.pollsTaken}</TableCell>
                                        <TableCell align="right">{row.pollsAsked}</TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}

const useStyles = theme => ({
    table: {
        minWidth: 650,
    },
});

export default withStyles(useStyles, { withTheme: true })(Leaderboard)

