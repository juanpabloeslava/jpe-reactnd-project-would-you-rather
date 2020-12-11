import React, { Component } from 'react'
// material imports
import PollListItem from '../components/PollListItem';


class Poll extends Component {

    render() {
        return (
                <div className='list-container'>
                    <h3 className='center'>Poll</h3>
                    <div >
                        <PollListItem />
                    </div>
                </div>
        )
    }
}


export default Poll
