import actionTypes from './actionTypes'

// to dispatch once the getInitialData() Promise has resolved, to pass the retrieved polls

export function getPolls (polls) {
    return {
        type: actionTypes.GET_POLLS,
        polls
    }
}
