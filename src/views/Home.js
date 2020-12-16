import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// reducers
import { connect } from 'react-redux'
// material imports
import PollList from '../components/PollList';


class Home extends Component {

    render() {

        const { authedUser } = this.props

        return (
            <div className='view-container'>
                {
                    authedUser !== null
                        ? <PollList />
                        : <Redirect    
                            to={{
                                pathname: '/login',
                                state: { referrer: '/' }
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

export default connect(
    mapStateToProps
)(Home);

