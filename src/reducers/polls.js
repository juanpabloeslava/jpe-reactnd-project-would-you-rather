import actionTypes from '../actions/actionTypes'

// initialize polls as an empty object
export default function pollsRed ( state = {}, action ) {
    switch (action.type) {
        case actionTypes.GET_POLLS :
            return action.polls
        default :
            return state
    }
} 