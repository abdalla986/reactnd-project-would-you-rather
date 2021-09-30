import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer, formatQuestion } from '../_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
      users, questions
    }))
}

export function saveQuestion (ques) {
  return _saveQuestion(ques)
}

export function saveQuestionAnswer(ques) {
  return _saveQuestionAnswer(ques)
}

export function formatQuestion(ques) {
  return formatQuestion(ques)
}

