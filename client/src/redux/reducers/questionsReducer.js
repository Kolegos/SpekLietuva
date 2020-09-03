import * as types from "../actions/actionTypes";

export default function questionsReducer(state = [], action) {
  switch (action.type) {
    case types.SET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        index: action.index,
        currentQuestion: action.questions[action.index],
      };
    case types.SET_INDEX_SUCCESS:
      console.log(action.index);
      return {
        ...state,
        currentQuestion: state.questions[action.index],
        index: action.index,
      };
    case types.SET_CURRENT_QUESTION_SUCCESS:
      return {
        ...state,
        currentQuestion: action.question,
      };
    case types.SET_CHOICES_SUCCESS:
      return {
        ...state,
        allChoices: action.allChoices,
        slicedChoices: action.slicedChoices,
      };
    case types.SET_SLICED_CHOICES_SUCCESS:
      return {
        ...state,
        slicedChoices: action.slicedChoices,
      };
    default:
      return state;
  }
}
