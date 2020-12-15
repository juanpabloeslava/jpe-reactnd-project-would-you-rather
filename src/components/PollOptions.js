import React, { Component, Fragment } from 'react'
import PollPercentage from './PollPercentage'
// import { saveUserAnswer } from '../utils/_API'
import { withRouter } from 'react-router-dom'
// actions
import { answerPollAsync } from '../actions'
// reducers
import { connect } from 'react-redux'
// material UI imports
import { Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@material-ui/core';

class PollOptions extends Component {

    state = {
        value: '',
        // submited: false
    }

    handleChange = (event) => {
        this.setState(() => {
            return { value: event.target.value };
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { value } = this.state
        const { dispatch, authedUser, id } = this.props
        // dispatch answer action
        dispatch(answerPollAsync({
            authedUser: authedUser,
            qid: id,
            answer: value
        }))
        // show results from poll
        this.props.showResult(value);
    };

    findPercentage = (val)  => {
        const per =  val / 3 * 100 
        return parseFloat(per).toFixed(0)
    }

    render() {

        const { optionOne, optionTwo, polls, authedUser, id } = this.props

        const poll = polls[id]
        
        // check if this poll has been answered by the active user
        const totalVotes = poll.optionOne.votes.concat(poll.optionTwo.votes)
        const answered = totalVotes.includes(authedUser) ? true : false
        

        return (
            <form onSubmit={this.handleSubmit}>
                {/* modify FormControl width to 100% otherwise all goes to shit */}
                <FormControl component="fieldset" className='MuiFormControl-fullWidth'>
                    {
                        answered && (
                            <Fragment>
                                <RadioGroup name="option" value={this.state.value} onChange={this.handleChange}>
                                    <FormControlLabel disabled value='optionOne' control={<Radio />} label={optionOne} />
                                    <PollPercentage 
                                        selected={true}
                                        people={2}
                                        percentage={this.findPercentage(2)}/>
                                    <FormControlLabel disabled value='optionTwo' control={<Radio />} label={optionTwo} />
                                    <PollPercentage 
                                        selected={false}
                                        people={1}
                                        percentage={this.findPercentage(1)}/>
                                </RadioGroup>
                            </Fragment>
                        )
                    }
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
                </FormControl>
            </form>
        );
    }

}

const mapStateToProps = ({ polls, authedUser }, ownProps) => {
// const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        polls,
        authedUser,
        id
    }
}

export default withRouter(
    connect(mapStateToProps)(PollOptions)
)