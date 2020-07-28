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
    <div>
      <div>
        <img src={question.image_link} />
      </div>
      <section>
        <div>
          {answered && <button onClick={resetQuestion}>Kitas klausimas</button>}
        </div>
        {choices.map((choice, index) => {
          return (
            <button
              key={index}
              onClick={() => onChoiceClicked(choice)}
              disabled={answered && isCorrect(choice)}
            >
              <span>{answered ? (isCorrect(choice) ? "✔" : "X") : null}</span>
              {choice.name}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default Question;
