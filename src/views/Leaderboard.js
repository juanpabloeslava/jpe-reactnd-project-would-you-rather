import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LeaderboardList from '../components/LeaderboardList'
// reducers
import { connect } from 'react-redux'

class Leaderboard extends Component {

    render() {

        const { authedUser } = this.props

        return (
            <div className='view-container'>
                {
                    authedUser !== null
                    ? <LeaderboardList />
                    : <Redirect    
                        to={{
                            pathname: '/login',
                            state: { referrer: '/leaderboard' }
                        }} />
                }
                
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)


