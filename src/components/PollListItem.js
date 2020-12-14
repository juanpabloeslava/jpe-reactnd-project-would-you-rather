import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
// reducers
import { connect } from 'react-redux'

class PollListItem extends Component {

    render() {
        console.log('props in Poll List Item Comp: ', this.props)
        return ( 
            <div>
                {/* {this.props.temp} */}
                <Link className='poll-list-item' to='/question'>
                    <div className='avatar-container'>
                    <img alt='avatar of user' className='avatar' src={`https://gravatar.com/avatar/90e832b87dc32a1741b5e30afd452824?s=400&d=robohash&r=x`} />
                    </div>
                    <div className='poll-info'>
                        <div>
                            <span className='user-name'> Sarah asked</span>
                            <div> {formatDate(1468479767190)} </div>
                            <p> Would you rather <span>have horrible short term memory</span> or <span>have horrible long term memory</span>?</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

// const mapStateToProps = ({ authedUser, polls, users }, {pollID}) => {
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(PollListItem)

