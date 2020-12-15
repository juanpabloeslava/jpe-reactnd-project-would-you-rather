import React, { Fragment } from 'react'

const findPercentage = (votes, totalVotes)  => {
    const per =  votes / totalVotes * 100 
    return parseFloat(per).toFixed(0)
}

const PollPercentage = ({selected, totalVotes, optionVotes}) => {

    const percentage = findPercentage(optionVotes, totalVotes)

    return ( 
        <Fragment>
            <div className={ selected ? `percentage-bar sel` : 'percentage-bar'}>
                <div 
                    className={ selected ? `percentage-bar-done sel` : 'percentage-bar-done'}
                    style={{
                        opacity: 1,
                        width:`${percentage}%`
                    }}>                
                </div>            
            </div>
            <p>
                {
                    selected 
                        ? `${optionVotes} / ${totalVotes} people (${percentage}%) selected this option, and you are one of those!`
                        : `${optionVotes} / ${totalVotes} people (${percentage}%) selected this option`
                }
                
            </p>
        </Fragment>
    )
}
 
export default PollPercentage;