import { getInitialData, saveQuestion } from "../utils/api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";
import {loginUser} from "./authedUser";

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

    return saveQuestion({optionOneText, optionTwoText, author: authedUser})
      // .then(console.log);
      .then(q => { console.log(q); return dispatch(addQuestion(q))});
  }
}

export function getData() {
  return dispatch => {
    dispatch(loginUser(USER_ID));
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      })
      .catch(e => console.warn('Error while getting initial data: ', e));
  }
}