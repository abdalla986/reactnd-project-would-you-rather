import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer, formatQuestion } from '../_DATA'

export function getInitialData () {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(
      ([users, questions]) => ({
        users, 
        questions
      })
    )
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function formatNewQuestion (info) {
  return formatQuestion(info)
}

