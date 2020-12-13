import actionTypes from './actionTypes'

export function setAuthedUser (userId) {
    // this is what gets passed as action in the reducer
    return {
        type: actionTypes.SET_AUTHED_USER,
        userId
    }
}

export function userLogOut () {
    return {
        type: actionTypes.LOG_OUT,
        userId: null
    }
}