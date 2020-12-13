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

export function addPoll (info) {
    return _saveQuestion(info)
}

export function saveUserAnswer (info) {
    return _saveQuestionAnswer(info)
}