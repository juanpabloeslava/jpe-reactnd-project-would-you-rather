import { SET_AUTHED_USER, LOG_OUT } from '../actions/actionTypes'

// initialize authedUser as null
export default function authedUserRed ( state = null, action ) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.userId
        case LOG_OUT :
            return action.userId
        default :
            return state
    }
} 