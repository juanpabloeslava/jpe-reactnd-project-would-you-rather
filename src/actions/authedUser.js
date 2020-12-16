import { SET_AUTHED_USER, LOG_OUT} from './actionTypes'

export function setAuthedUser (userId) {
    // this is what gets passed as action in the reducer
    return {
        type: SET_AUTHED_USER,
        userId
    }
}

export function userLogOut () {
    return {
        type: LOG_OUT,
        userId: null
    }
}