import actionTypes from './actionTypes'

export function setAuthedUser (userId) {
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