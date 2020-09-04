import * as types from "../actions/actionTypes";

export default function questionsReducer(state = [], action) {
  switch (action.type) {
    case types.SET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        index: action.index,
        currentQuestion: action.questions[action.index],
        score: 0,
      };
    case types.SET_INDEX_SUCCESS:
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
    case types.SET_SCORE_SUCCESS:
      return {
        ...state,
        score: action.score,
      };
    case types.GET_CHOICES:
      return {
        ...state,
        trigger: action.trigger === true ? false : true,
      };
    case types.RESET_QUESTIONS_SUCCESS:
      return {
        ...state,
        index: 0,
        score: 0,
        slicedChoices: action.slicedChoices,
        questions: action.questions,
        currentQuestion: action.questions[0],
      };
    default:
      return state;
  }
}
