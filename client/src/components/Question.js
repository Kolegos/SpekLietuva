import React, { useState } from "react";

const Question = ({ question, prevQuestion, onNextClicked, choices }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const onChoiceClicked = (choice) => {
    setAnswered(true);
    setSelectedChoice(choice);
  };

  const isCorrect = (choice) => {
    return choice.name === question.name;
  };

  const resetQuestion = () => {
    setAnswered(false);
    setSelectedChoice(null);
    onNextClicked(selectedChoice);
  };

  return (
    <div className="question">
      <div>
        <div className="question-image-wrapper">
          <img className="question-image" src={question.image_link} alt="" />
          {question != prevQuestion ? (
            <img
              className="question-image question-image-exit"
              src={prevQuestion.image_link}
              alt=""
            />
          ) : null}
        </div>
      </div>
      <div>
        <div className="question-next-question">
          {answered && (
            <button
              className="question-next-choice"
              style={{ width: "70%" }}
              onClick={resetQuestion}
            >
              Kitas klausimas
            </button>
          )}
        </div>
        <div className="choicesWrapper">
          {choices.map((choice, index) => {
            return (
              <button
                className={`question-choice`}
                style={{
                  color: answered ? (isCorrect(choice) ? "green" : "red") : "",
                  "--animation-order": index,
                }}
                key={question.element_id * 100 + index}
                onClick={() => onChoiceClicked(choice)}
                disabled={answered && isCorrect(choice)}
              >
                {choice.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
