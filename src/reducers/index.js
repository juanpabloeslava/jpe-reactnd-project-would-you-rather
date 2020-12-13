import { combineReducers } from 'redux'
// import reducers
import authedUserRed from './authedUser'

// this will be the state of the store
export default combineReducers({
    authedUser: authedUserRed
})