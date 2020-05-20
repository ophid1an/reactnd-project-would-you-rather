import { getInitialData } from "../utils/api";
import {getUsers} from "./users";
import {getQuestions} from "./questions";

export function getData() {
  return dispatch => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      })
      .catch(e => console.warn('Error while getting initial data: ', e));
  }
}