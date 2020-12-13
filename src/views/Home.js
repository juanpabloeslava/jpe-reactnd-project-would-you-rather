import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// reducers
import { connect } from 'react-redux'
// material imports
import PollList from '../components/PollList';


class Home extends Component {

    render() {
        console.log('props in Home: ', this.props)
        
        const { authedUser } = this.props

        return (
            <div className='view-container'>
                {
                    authedUser !== null 
                    ? <PollList />
                    : <Redirect to='/login' />
                }
            </div>
        )
    }
}

const mapStateToProps = ( {authedUser} ) => {
    return { 
      authedUser
    }
  }
  
  export default connect(
    mapStateToProps
  )(Home);

