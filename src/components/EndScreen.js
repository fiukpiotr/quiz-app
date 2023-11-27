import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts.js";
import { Questions } from "../helpers/Questions.js";

const EndScreen = () => {
  const { score, setScore, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setUserName("");
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>: {userName} :</h3>
      <h2>
        You've scored {score}/{Questions.length} points
      </h2>
      <button className="btn fin-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
