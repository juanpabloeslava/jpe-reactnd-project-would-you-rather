import React, { Component, Fragment } from 'react'
import PollPercentage from './PollPercentage'
// material UI imports
import { Radio, RadioGroup, FormControl, FormControlLabel, Button } from '@material-ui/core';

class PollOption extends Component {

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
        // deactivate options and submit button
        this.setState(prevState => {
            return { submited: !prevState.submited };
        });
        console.log('form submited:', value)
        // show results from poll
        this.props.showResult(value);
    };

    findPercentage = (val)  => {
        const per =  val / 3 * 100 
        return parseFloat(per).toFixed(0)
    }

    render() {

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
                                    <FormControlLabel disabled value={optionOne} control={<Radio />} label={optionOne} />
                                    <PollPercentage 
                                        selected={true}
                                        people={2}
                                        percentage={this.findPercentage(2)}/>
                                    <FormControlLabel disabled value={optionTwo} control={<Radio />} label={optionTwo} />
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
                                <RadioGroup aria-label="gender" name="option" value={this.state.value} onChange={this.handleChange}>
                                    <FormControlLabel value={optionOne} control={<Radio />} label={optionOne} />
                                    <FormControlLabel value={optionTwo} control={<Radio />} label={optionTwo} />
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

export default PollOption



















// function PollOption () {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('form submited')
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//         <FormControl component="fieldset">
//             {/* <FormLabel component="legend">Gender</FormLabel> */}
//             <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//                 <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 <FormControlLabel value="male" control={<Radio />} label="Male" />
//             </RadioGroup>
//             {/* <Button type="submit" variant="outlined" color="primary" className={classes.button}> */}
//             <Button type="submit" className='poll-submit-btn'>
//                 Submit Poll
//             </Button>
//         </FormControl>
//     </form>
//   );
// }

// export default PollOption