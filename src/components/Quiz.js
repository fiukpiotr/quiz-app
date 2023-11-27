import "../App.css";
import { Questions } from "../helpers/Questions.js";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts.js";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <div className="questions">
        <button
          className="btn answear-btn"
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className="btn answear-btn"
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className="btn answear-btn"
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className="btn answear-btn"
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <div id="q-buttons-container">
          <button className="btn navi-btn" onClick={previousQuestion}>
            Go Back
          </button>
          <button className="btn navi-btn fin-button" onClick={finishQuiz}>
            Finish Quiz
          </button>
        </div>
      ) : (
        <div id="q-buttons-container">
          {currentQuestion > 0 && (
            <button className="btn navi-btn" onClick={previousQuestion}>
              Go Back
            </button>
          )}
          <button className="btn navi-btn" onClick={nextQuestion}>
            Next{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
