import { GET_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION } from "../actions/shared";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}