import React, { Component } from 'react'
// material imports
import Poll from '../components/Poll';


class PollView extends Component {

    render() {
        return (
            <div className='view-container'>
                <Poll />
            </div>     
        )
    }
}



export default PollView
