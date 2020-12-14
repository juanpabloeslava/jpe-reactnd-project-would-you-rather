import { combineReducers } from 'redux'
// import reducers
import authedUserRed from './authedUser'
import usersRed from './users'
import pollsRed from './polls'
import { loadingBarReducer } from 'react-redux-loading-bar'

// this will be the state of the store
export default combineReducers({
    authedUser: authedUserRed,
    users: usersRed,
    polls: pollsRed,
    loadingBar: loadingBarReducer
})