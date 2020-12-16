import { GET_USERS } from '../actions/actionTypes'

// to dispatch once the getInitialData() Promise has resolved, to pass the retrieved users
export function getUsers (users) {
    return {
        type: GET_USERS,
        users
    }
}