import actionTypes from '../actions/actionTypes'

// initialize polls in the state as an empty object
export default function pollsRed(state = {}, action) {
    switch (action.type) {
        case actionTypes.GET_POLLS:
            return action.polls
        case actionTypes.ANSWER_POLL:
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
        default :
            return state
    }
} 