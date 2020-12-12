import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// material imports
import PollList from '../components/PollList';


class Home extends Component {

    render() {
        return (
            <div className='view-container'>
                <PollList />
            </div>
        )
    }
}



export default Home
