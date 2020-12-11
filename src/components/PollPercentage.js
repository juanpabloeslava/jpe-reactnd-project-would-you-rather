import { Fragment } from 'react'

const PollPercentage = ({selected, people, percentage}) => {
    return ( 
        <Fragment>
            <div className='percentage-bar'>
                <div 
                    className={ selected ? `percentage-bar-done sel` : 'percentage-bar-done'}
                    style={{
                        opacity: 1,
                        width:`${percentage}%`
                    }}>                
                </div>            
            </div>
            <p>
                {people} / 3 people ({percentage}%) selected this option
            </p>
        </Fragment>
    )
}
 
export default PollPercentage;