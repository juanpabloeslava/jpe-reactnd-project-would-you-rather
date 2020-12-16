import { GET_USERS, ANSWER_POLL, ADD_POLL } from '../actions/actionTypes'

// initialize users as an empty object
export default function usersRed ( state = {}, action ) {
    switch (action.type) {
        case GET_USERS :
            return action.users
        case ANSWER_POLL:
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
        case ADD_POLL :
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        default :
            return state
    }
}