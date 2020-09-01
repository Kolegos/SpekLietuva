import * as types from "./actionTypes";

export function setQuestions(questions) {
  return { type: types.SET_QUESTIONS_SUCCESS, questions };
}
