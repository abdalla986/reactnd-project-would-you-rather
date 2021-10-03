import { saveQuestion, saveQuestionAnswer } from '../utils/api'


export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
  return {
    type: ADD_QUESTION,
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const questionInfo = {
        optionOneText,
        optionTwoText,
        author: authedUser
    }

    return saveQuestion(questionInfo)
      .then((question) => {
        dispatch(addQuestion(question))
      })
      .catch( (error) => {
        console.log('Something went wrong when saving the question. Try again!');
        alert('Something went wrong when creating new question. Try again!')
      })
  }
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser, 
    qid, 
    answer
  }
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    dispatch(addAnswer(info))
    return saveQuestionAnswer(info)
      .then(() => console.log('added answer'))
      .catch((error) => {
        console.log('There was a problem creating new question. Try again!');
      })
  }
}
