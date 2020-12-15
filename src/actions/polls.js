import actionTypes from './actionTypes'

// to dispatch once the getInitialData() Promise has resolved, to pass the retrieved polls

export function getPolls (polls) {
    return {
        type: actionTypes.GET_POLLS,
        polls
    }
}

export function answerPoll ({ authedUser, qid, answer }) {
    return {
        type: actionTypes.ANSWER_POLL,
        authedUser,
        qid,
        answer
    }
}

export function addPoll ({ optionOneText, optionTwoText, author }) {
    return {
        type: actionTypes.ADD_POLL,
        optionOneText, 
        optionTwoText,
        author
    }
}