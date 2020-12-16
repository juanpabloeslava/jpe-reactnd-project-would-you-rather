import { GET_POLLS, ANSWER_POLL, ADD_POLL } from '../actions/actionTypes'

// initialize polls in the state as an empty object
export default function pollsRed(state = {}, action) {
    switch (action.type) {
        case GET_POLLS:
            return action.polls
        case ANSWER_POLL:
            const { authedUser, qid, answer } = action
            // state refers to just the polls/questions portion of the state. The destructuring is the same is in the _saveQuestionAnswer function in 'src/utils/_DATA'
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            }
        case ADD_POLL :
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default :
            return state
    }
} 