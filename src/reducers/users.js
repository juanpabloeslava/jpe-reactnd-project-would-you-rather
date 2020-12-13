import actionTypes from '../actions/actionTypes'

// initialize users as an empty object
export default function usersRed ( state = {}, action ) {
    switch (action.type) {
        case actionTypes.GET_USERS :
            return action.users
        default :
            return state
    }
}