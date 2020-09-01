import * as types from "../actions/actionTypes";

export default function questionsReducer(state = [], action) {
  switch (action.type) {
    case types.SET_QUESTIONS_SUCCESS:
      return { ...state, questions: action.questions };
    default:
      return state;
  }
}
