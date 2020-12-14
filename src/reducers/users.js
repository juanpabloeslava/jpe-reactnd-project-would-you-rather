import actionTypes from '../actions/actionTypes'

// initialize users as an empty object
export default function usersRed ( state = {}, action ) {
    switch (action.type) {
        case actionTypes.GET_USERS :
            return action.users
        case actionTypes.ANSWER_POLL:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default :
            return state
    }
}