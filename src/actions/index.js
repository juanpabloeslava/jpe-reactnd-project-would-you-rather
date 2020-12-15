import { setAuthedUser, userLogOut } from './authedUser'
import { getUsers } from './users'
import { getPolls, answerPoll } from './polls'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
// api imports
import { getInitialData, saveUserAnswer } from '../utils/_API'
import { _saveQuestionAnswer } from '../utils/_DATA'


// initial id
const userId = null


// async actions to export

export const fetchInitialDataAsync = () => (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
        .then( ({polls, users}) => {
            dispatch(getUsers(users))
            dispatch(getPolls(polls))
            dispatch(setAuthedUser(userId))
            dispatch(hideLoading())
        })
        .catch( e => {
            console.log('there was an error fetching the initial data: ', e)
        })
}

export const answerPollAsync = (info) => (dispatch) => {
    dispatch(showLoading())
    // return promise from API 
    return saveUserAnswer(info)
        .then( () => {
            dispatch(answerPoll(info))
            dispatch(hideLoading())
        })
}