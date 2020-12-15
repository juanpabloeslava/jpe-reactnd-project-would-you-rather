import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
// reducers
import { connect } from 'react-redux'

class PollListItem extends Component {

    render() {

        const { authedUser, polls, users, id} = this.props
        const poll = polls[id]
        const author = users[poll.author]
        const displayName = author.id === authedUser ? 'You' : author.name

        return (
            <div>
                <Link className='poll-list-item' to={`/questions/${id}`}>
                    <div className='avatar-container'>
                        <img alt={`avatar of ${author.name}`} className='avatar' src={author.avatarURL} />
                    </div>
                    <div className='poll-info'>
                        <div>
                            <span className='user-name'>{displayName} asked</span>
                            <div> {formatDate(poll.timestamp)} </div>
                            <p> Would you rather <span>{ poll ? poll.optionOne.text : 'undefined' }</span> or <span>{ poll ? poll.optionTwo.text : 'undefined' }</span>?</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
    return {
        authedUser,
        polls,
        users
    }
}

export default connect(mapStateToProps)(PollListItem)

