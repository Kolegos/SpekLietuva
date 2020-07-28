import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
const shuffle = require("shuffle-array");

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [choices, setChoices] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const urlDB =
    process.env.NODE_ENV === `production`
      ? `/api/categories`
      : "http://localhost:5000/api/categories";

  useEffect(() => {
    let shuffledQuestions;
    axios
      .get(urlDB + "/getQuestions", {
        params: { categoryID: props.categoryID },
      })
      .then((res) => {
        if (res.status !== 200)
          alert("Įvyko klaida susisiekiant su duomenų baze");
        console.log(res.data);
        shuffledQuestions = shuffle(res.data);
        setQuestions(shuffledQuestions);
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlDB + "/getChoices", {
        params: { categoryID: props.categoryID },
      })
      .then((res) => {
        if (res.status !== 200)
          alert("Įvyko klaida susisiekiant su duomenų baze");
        const shuffledChoices = shuffle(res.data);
        setChoices(shuffledChoices);
      });
  }, []);

  const onNextClicked = (selectedOption) => {
    if (currentQuestion.name === selectedOption.name) setScore(score + 1);
    if (currentIndex + 1 > questions.length - 1) {
      setShowFinished(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowFinished(false);
    setScore(0);
    const shuffledChoices = shuffle(choices);
    setChoices(shuffledChoices);
  };

  return questions.length !== 0 ? (
    <div>
      {showFinished ? (
        <div>
          <h1>Šios kategorijos žaidimas baigtas</h1>
        </div>
      ) : (
        <Question
          onNextClicked={onNextClicked}
          question={currentQuestion}
          choices={choices}
        />
      )}
      {showFinished ? (
        <>
          <button onClick={resetQuiz}>Bandyk dar kartą</button>
          <h1>Surinkai {score}</h1>
        </>
      ) : (
        <div>
          {currentIndex + 1} / {questions.length}
        </div>
      )}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Questions;
