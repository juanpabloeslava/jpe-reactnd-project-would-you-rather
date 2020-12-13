import actionTypes from '../actions/actionTypes'

// initialize authedUser as null
export default function authedUserRed ( state = null, action ) {
    switch (action.type) {
        case actionTypes.SET_AUTHED_USER :
            return action.userId
        case actionTypes.LOG_OUT :
            return action.userId
        default :
            return state
    }
} 