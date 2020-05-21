import { GET_USERS } from "../actions/users";
import { ADD_QUESTION } from "../actions/shared";

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
    default:
      return state;
  }
}