import React, { Component, Fragment } from 'react'
import PollPercentage from './PollPercentage'
// import { saveUserAnswer } from '../utils/_API'
import { withRouter } from 'react-router-dom'
// actions
import { answerPollAsync } from '../actions'        // used down under by mapDispatchToProps
// reducers
import { connect } from 'react-redux'
// material UI imports
import { Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@material-ui/core';

class PollOptions extends Component {

    state = {
        value: '',
    }

    handleChange = (event) => {
        this.setState(() => {
            return { value: event.target.value };
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state
        const { authedUser, id, answerPollAsync } = this.props

        // dispatch is already included, comes via mapDispatchToProps. Batteries sold separately
        answerPollAsync({
            authedUser: authedUser,
            qid: id,
            answer: value
        })
        // }))
    };

    render() {

        const { users, optionOne, optionTwo, polls, authedUser, id } = this.props
        const poll = polls[id]
        
        // check if this poll has been answered by the authenticated user
        const totalVotes = poll.optionOne.votes.concat(poll.optionTwo.votes)
        console.log('poll: ', poll)
        // .includes() returns a boolean
        const answered = totalVotes.includes(authedUser)
        
        // display option as checked
        const activeUser = users[authedUser]
        const thisPollAnswer = activeUser.answers[poll.id]
        
        const checkOptionOne = thisPollAnswer === 'optionOne' ? true : false
        const checkOptionTwo = !checkOptionOne

        // Poll Percentages
        const totalVotesNum = totalVotes.length
        const votesOptionOne = poll.optionOne.votes.length
        const votesOptionTwo = poll.optionTwo.votes.length

        return (
            <form onSubmit={this.handleSubmit}>
                {/* modify FormControl width to 100% otherwise all goes to shit */}
                <FormControl component="fieldset" className='MuiFormControl-fullWidth'>
                    {
                        !answered && (
                            <Fragment>
                                <RadioGroup name="option" value={this.state.value} onChange={this.handleChange}>
                                    <FormControlLabel value='optionOne' control={<Radio />} label={optionOne} />
                                    <FormControlLabel value='optionTwo' control={<Radio />} label={optionTwo} />
                                </RadioGroup>
                                <div>
                                    <div className='poll-submit-btn'>
                                        <Button type="submit" className='MuiButton-contained'> Submit Poll  </Button>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    }
                    {
                        answered && (
                            <Fragment>
                                <RadioGroup name="option" value={this.state.value} onChange={this.handleChange}>
                                    <FormControlLabel 
                                        disabled value='optionOne' label={optionOne} 
                                        control={
                                            <Radio checked={checkOptionOne}/>}
                                    />
                                    <PollPercentage 
                                        selected={checkOptionOne}
                                        totalVotes={totalVotesNum}
                                        optionVotes={votesOptionOne}/>
                                    <FormControlLabel 
                                        disabled value='optionTwo'  label={optionTwo}  
                                        control={
                                            <Radio checked={checkOptionTwo}/>}
                                    />
                                    <PollPercentage
                                        selected={checkOptionTwo}
                                        totalVotes={totalVotesNum}
                                        optionVotes={votesOptionTwo}/>
                                </RadioGroup>
                            </Fragment>
                        )
                    }
                </FormControl>
            </form>
        );
    }

}

const mapStateToProps = ({ polls, authedUser, users }, ownProps) => {
    const id = ownProps.match.params.id
    return {
        polls,
        authedUser,
        id,
        users
    }
}

export default withRouter(
    // on the second connect() argument, we're defining mapDispatchToProps As An Object
    // connect() assumes that whatever gets passed in the object is an action creator
    // https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
    connect(mapStateToProps, { answerPollAsync })(PollOptions)
)