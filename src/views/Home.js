import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// material imports
import PollList from '../components/PollList';


class Home extends Component {

    // state = {
    //     showComp: false
    // }

    render() {
        return (
            <div className='view-container'>
                <PollList />
                {/* {
                    this.state.showComp 
                        ? <PollList />
                        : <Poll />
                } */}
            </div>
        )
    }
}



export default Home
