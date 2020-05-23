import { GET_USERS } from "../actions/users";
import {ADD_QUESTION, ADD_QUESTION_ANSWER} from "../actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state, ...action.users};
    case ADD_QUESTION:
      const { question } = action;
      const { author } = question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, question.id]
        }
      };
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          }
        }
      };
    default:
      return state;
  }
}