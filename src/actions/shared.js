import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addQuestionAnswer({authedUser, qid, answer}) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({optionOneText, optionTwoText, author: authedUser})
      .then(q => dispatch(addQuestion(q)))
      .then(() => dispatch(hideLoading()));
  }
}

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({authedUser, qid, answer})
      .then(() => dispatch(addQuestionAnswer({authedUser, qid, answer})))
      .then(() => dispatch(hideLoading()));
  }
}

export function getData() {
  return dispatch => {
    dispatch(showLoading());

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        // dispatch(loginUser(USER_ID));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => console.warn('Error while getting initial data: ', e));
  }
}