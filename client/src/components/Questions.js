import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import ScoreBar from "./ScoreBar";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionsActions from "../redux/actions/questionsActions";

const shuffle = require("shuffle-array");

const Questions = ({
  setReduxQuestions,
  setIndex,
  setCurrentQuestion,
  setChoices,
  setSlicedChoices,
  setScore,
  getChoices,
  reset,
  questions,
  index,
  currentQuestion,
  slicedChoices,
  allChoices,
  score,
  trigger,
  ...props
}) => {
  const [showFinished, setShowFinished] = useState(false);
  let history = useHistory();
  let id;
  id = parseInt(props.match.params.id);
  id = Number.isInteger(id) ? id : -1;

  const urlDB =
    process.env.NODE_ENV === `production`
      ? `/api/categories`
      : "http://localhost:5000/api/categories";

  useEffect(() => {
    if (!questions || questions.length === 0) {
      let shuffledQuestions;
      axios
        .get(urlDB + "/getQuestions", {
          params: { categoryID: id },
        })
        .then((res) => {
          if (res.status !== 200)
            alert("Įvyko klaida susisiekiant su duomenų baze");
          if (res.data.length === 0) history.push("/");
          shuffledQuestions = shuffle(res.data);
          setReduxQuestions(shuffledQuestions, 0);
          getChoices();
        });
    }
    // eslint-disable-next-line
    return () => {
      document.getElementById("root").style.background = "rgb(0 0 0 / 0.0)";
    };
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion) {
      if (!allChoices || !slicedChoices) {
        axios
          .get(urlDB + "/getChoices", {
            params: { categoryID: id },
          })
          .then((res) => {
            if (res.status !== 200)
              alert("Įvyko klaida susisiekiant su duomenų baze");
            const choicesFromDB = shuffle(res.data);
            //setAllChoices(choicesFromDB);

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
            setChoices(choicesFromDB, shuffledChoices);
          });
      }
    }

    // eslint-disable-next-line
  }, [trigger]);

  const onNextClicked = (selectedOption) => {
    if (currentQuestion.name === selectedOption.name) setScore(score + 1);
    if (index + 1 > questions.length - 1) {
      setShowFinished(true);
      document.getElementById("root").style.backgroundColor =
        "rgb(0 0 0 / 0.6)";
      return;
    }
    const allChoicesCopy = [...allChoices];
    const shuffledAllChoices = shuffle(allChoicesCopy);
    setIndex(index + 1);
    const answer = questions[index + 1]
      ? shuffledAllChoices.find((e) => e.name === questions[index + 1].name)
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
    document.getElementById("root").style.background = "rgb(0 0 0 / 0.0)";
    setShowFinished(false);
    const questionsCopy = [...questions];
    const shuffledQuestions = shuffle(questionsCopy);
    const allChoicesCopy = [...allChoices];
    const shuffledAllChoices = shuffle(allChoicesCopy);
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
    reset(shuffledChoices, shuffledQuestions);
  };

  return questions &&
    questions.length !== 0 &&
    currentQuestion &&
    slicedChoices ? (
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
        <></>
        /*<Question
          onNextClicked={onNextClicked}
          question={currentQuestion}
          prevQuestion={questions[Math.max(currentIndex - 1, 0)]}
          choices={slicedChoices}
          key={currentQuestion.element_id}
        />*/
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

            <button
              className="questions-try-again-button"
              onClick={() => {
                history.push("/categories");
              }}
            >
              Grįžti į meniu
            </button>
          </div>
        </>
      ) : (
        <div>
          <div id="progressBar">
            <ProgressBar
              bgcolor="#3e98c7"
              completed={Math.round((index / questions.length) * 100)}
            />
          </div>
          <Question
            onNextClicked={onNextClicked}
            question={currentQuestion}
            prevQuestion={questions[Math.max(index - 1, 0)]}
            choices={slicedChoices}
            key={currentQuestion.element_id}
          />
        </div>
      )}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

const mapStateToProps = (state) => {
  const questions = state.questions.questions;
  const index = state.questions.index;
  const currentQuestion = state.questions.currentQuestion;
  const slicedChoices = state.questions.slicedChoices;
  const allChoices = state.questions.allChoices;
  const score = state.questions.score;
  const trigger = state.questions.trigger;
  return {
    questions,
    currentQuestion,
    index,
    slicedChoices,
    allChoices,
    score,
    trigger,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setReduxQuestions: bindActionCreators(
    questionsActions.setQuestions,
    dispatch
  ),
  setIndex: bindActionCreators(questionsActions.setIndex, dispatch),
  setCurrentQuestion: bindActionCreators(
    questionsActions.setQuestion,
    dispatch
  ),
  setChoices: bindActionCreators(questionsActions.setChoices, dispatch),
  setSlicedChoices: bindActionCreators(
    questionsActions.setSlicedChoices,
    dispatch
  ),
  getChoices: bindActionCreators(questionsActions.getChoices, dispatch),
  setScore: bindActionCreators(questionsActions.setScore, dispatch),
  reset: bindActionCreators(questionsActions.reset, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
