import { combineReducers } from 'redux'
// import reducers
import authedUserRed from './authedUser'
import usersRed from './users'
import pollsRed from './polls'

// this will be the state of the store
export default combineReducers({
    authedUser: authedUserRed,
    users: usersRed,
    polls: pollsRed
})