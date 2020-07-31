import React, { useState } from "react";

const Question = ({ question, onNextClicked, choices }) => {
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
        <img className="question-image" src={question.image_link} alt="" />
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
        <div>
          {choices.map((choice, index) => {
            return (
              <button
                className="question-choice"
                key={index}
                onClick={() => onChoiceClicked(choice)}
                disabled={answered && isCorrect(choice)}
              >
                <span style={{ color: isCorrect(choice) ? "green" : "red" }}>
                  {answered ? (isCorrect(choice) ? "✔" : "X") : null}
                </span>
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
