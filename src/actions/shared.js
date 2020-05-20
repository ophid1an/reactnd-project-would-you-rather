import { getInitialData } from "../utils/api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";
import {loginUser} from "./authedUser";

const USER_ID = 'johndoe';

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