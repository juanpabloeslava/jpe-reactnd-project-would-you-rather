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
        submited: false
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
        console.log('authedUser: ', authedUser)
        // deactivate options and submit button
        this.setState(prevState => {
            return { submited: !prevState.submited };
        });
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
        console.log('state at beginning of Poll options: ', this.props.state)
        const { optionOne,optionTwo } = this.props
        const { submited } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                {/* modify FormControl width to 100% otherwise all goes to shit */}
                <FormControl component="fieldset" className='MuiFormControl-fullWidth'>
                    {
                        submited === true && (
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
                                <div>
                                    <div className='poll-submit-btn'>
                                        <Button disabled type="submit" className='MuiButton-contained'> Poll Submited!  </Button>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    }
                    {
                        submited === false && (
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

// const mapStateToProps = ({ authedUser }, ownProps) => {
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        state,
        authedUser: state.authedUser,
        id
    }
}

export default withRouter(
    connect(mapStateToProps)(PollOptions)
)