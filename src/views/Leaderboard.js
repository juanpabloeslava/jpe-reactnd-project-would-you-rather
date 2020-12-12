import React, { Component } from 'react'
import PollListItem from '../components/PollListItem';

class Leaderboard extends Component {

    render() {
        return (
            <div className='view-container'>
                <h3 className='center'>Leaderboard</h3>
                <div className='list-container'>
                    <div>
                        <ul className='no-padding no-margin'>
                            <PollListItem temp='1'/>
                            <PollListItem temp='2'/>
                            <PollListItem temp='3'/>
                            <PollListItem temp='4'/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard
