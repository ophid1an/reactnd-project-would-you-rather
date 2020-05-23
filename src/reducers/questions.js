import { GET_QUESTIONS } from "../actions/questions";
import {ADD_QUESTION, ADD_QUESTION_ANSWER} from "../actions/shared";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer].votes,
              action.authedUser
            ]
          }
        }
      };
    default:
      return state;
  }
}