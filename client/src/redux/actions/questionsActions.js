import * as types from "./actionTypes";

export function setQuestions(questions, index) {
  return { type: types.SET_QUESTIONS_SUCCESS, questions, index };
}
export function setIndex(index) {
  return { type: types.SET_INDEX_SUCCESS, index };
}
export function setQuestion(question) {
  return { type: types.SET_CURRENT_QUESTION_SUCCESS, question };
}
export function setChoices(allChoices, slicedChoices) {
  return { type: types.SET_CHOICES_SUCCESS, allChoices, slicedChoices };
}
export function setSlicedChoices(slicedChoices) {
  return { type: types.SET_SLICED_CHOICES_SUCCESS, slicedChoices };
}
