import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class PollListItem extends Component {

    render() {
        return ( 
            <div>
                {/* {this.props.temp} */}
                <Link className='poll-list-item'>
                    <div className='avatar-container'>
                        <img className='avatar' src={`https://gravatar.com/avatar/90e832b87dc32a1741b5e30afd452824?s=400&d=robohash&r=x`} />
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

export default PollListItem;