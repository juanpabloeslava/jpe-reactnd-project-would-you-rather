import actionTypes from './actionTypes'

// to dispatch once the getInitialData() Promise has resolved, to pass the retrieved users
export function getUsers (users) {
    return {
        type: actionTypes.GET_USERS,
        users
    }
}