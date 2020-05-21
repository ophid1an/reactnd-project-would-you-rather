import { getInitialData, saveQuestion } from "../utils/api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";
import {loginUser} from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_QUESTION = 'ADD_QUESTION';

const USER_ID = 'johndoe';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
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

export function getData() {
  return dispatch => {
    dispatch(showLoading());
    dispatch(loginUser(USER_ID));

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => console.warn('Error while getting initial data: ', e));
  }
}