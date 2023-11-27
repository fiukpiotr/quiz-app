import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts.js";
import swal from "sweetalert";

function Menu() {
  const { setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <div className="Menu">
      <label for="input">Enter Your Name:</label>
      <input
        id="input"
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.target.value !== "" && event.key === "Enter") {
            setGameState("playing");
          } else if (event.key === "Enter") {
            swal("You have to write your name to start a game.");
          }
        }}
      />
      <button
        className="btn start-btn"
        onClick={(event) => {
          if (userName.trim() !== "") {
            setGameState("playing");
          }
        }}
        disabled={!userName.trim()}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
