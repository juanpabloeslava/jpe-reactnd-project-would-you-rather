import { GET_POLLS, ANSWER_POLL, ADD_POLL, } from './actionTypes'

// to dispatch once the getInitialData() Promise has resolved, to pass the retrieved polls

export function getPolls (polls) {
    return {
        type: GET_POLLS,
        polls
    }
}

export function answerPoll ({ authedUser, qid, answer }) {
    return {
        type: ANSWER_POLL,
        authedUser,
        qid,
        answer
    }
}

export function addPoll ( question ) {
    return {
        type: ADD_POLL,
        question
    }
}