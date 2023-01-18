import React, { useContext } from "react";
//import "./Styles/Scores.css";
import ScoresElement from "./Styles/ScoresElement.styled";
import ScoreContext from "../Store/ScoresContext";

function Scores(props) {
  const { playersScores } = useContext(ScoreContext);

  return (
    <ScoresElement>
      <div className="score">X : {playersScores.playerX_Score}</div>
      <div className="space"></div>
      <div className="score">O : {playersScores.playerO_Score}</div>
    </ScoresElement>
  );
}

export default Scores;
