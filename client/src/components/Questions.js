import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import ScoreBar from "./ScoreBar";

const shuffle = require("shuffle-array");

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [slicedChoices, setSlicedChoices] = useState([]);
  const [allChoices, setAllChoices] = useState([]);
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
        shuffledQuestions = shuffle(res.data);
        setQuestions(shuffledQuestions);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(urlDB + "/getChoices", {
        params: { categoryID: props.categoryID },
      })
      .then((res) => {
        if (res.status !== 200)
          alert("Įvyko klaida susisiekiant su duomenų baze");
        const choicesFromDB = shuffle(res.data);
        setAllChoices(choicesFromDB);
        const answer = currentQuestion
          ? choicesFromDB.find((e) => e.name === currentQuestion.name)
          : "";
        const filteredChoices = choicesFromDB.filter(
          (choice) => choice !== answer
        );
        filteredChoices.push(answer);
        const lastFilteredChoices = filteredChoices.slice(
          Math.max(filteredChoices.length - 4, 0)
        );
        const shuffledChoices = shuffle(lastFilteredChoices);
        setSlicedChoices(shuffledChoices);
      });
    // eslint-disable-next-line
  }, [questions]);

  const onNextClicked = (selectedOption) => {
    if (currentQuestion.name === selectedOption.name) setScore(score + 1);
    if (currentIndex + 1 > questions.length - 1) {
      setShowFinished(true);
      return;
    }
    const shuffledAllChoices = shuffle(allChoices);
    setCurrentIndex(currentIndex + 1);
    const answer = questions[currentIndex + 1]
      ? shuffledAllChoices.find(
          (e) => e.name === questions[currentIndex + 1].name
        )
      : "";
    const filteredChoices = shuffledAllChoices.filter(
      (choice) => choice !== answer
    );
    filteredChoices.push(answer);
    const lastFilteredChoices = filteredChoices.slice(
      Math.max(filteredChoices.length - 4, 0)
    );
    const shuffledChoices = shuffle(lastFilteredChoices);
    setSlicedChoices(shuffledChoices);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowFinished(false);
    setScore(0);
    const shuffledQuestions = shuffle(questions);
    const shuffledAllChoices = shuffle(allChoices);
    const answer = shuffledQuestions[0]
      ? shuffledAllChoices.find((e) => e.name === questions[0].name)
      : "";
    const filteredChoices = shuffledAllChoices.filter(
      (choice) => choice !== answer
    );
    filteredChoices.push(answer);
    const lastFilteredChoices = filteredChoices.slice(
      Math.max(filteredChoices.length - 4, 0)
    );
    const shuffledChoices = shuffle(lastFilteredChoices);
    setSlicedChoices(shuffledChoices);
    setQuestions(shuffledQuestions);
  };

  return questions.length !== 0 ? (
    <div className="questions">
      {showFinished ? (
        <div className="questions-game-end">
          <h1>Šios kategorijos žaidimas baigtas</h1>
          <h2>Jūsų rezultatas</h2>
          <div className="arrow">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      ) : (
        <Question
          onNextClicked={onNextClicked}
          question={currentQuestion}
          choices={slicedChoices}
        />
      )}
      {showFinished ? (
        <>
          <div
            className="questions-game-end questions-score-bar"
            style={{ width: "20%", minWidth: "200px" }}
          >
            <ScoreBar score={(score / questions.length) * 100} />
          </div>
          <div className="questions-try-again">
            <button className="questions-try-again-button" onClick={resetQuiz}>
              Bandyk dar kartą
            </button>
          </div>
        </>
      ) : (
        <div>
          <ProgressBar
            bgcolor="#3e98c7"
            completed={Math.round((currentIndex / questions.length) * 100)}
          />
        </div>
      )}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Questions;