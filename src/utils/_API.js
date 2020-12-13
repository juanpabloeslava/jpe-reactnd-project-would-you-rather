import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, polls]) => ({
      users,
      polls,
    }))
  }

export function addPoll (poll) {
    return _saveQuestion(poll)
}

export function saveUserAnswer (answerInfo) {
    return _saveQuestionAnswer(answerInfo)
}