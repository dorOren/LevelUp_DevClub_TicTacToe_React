import React, { useContext } from "react";
//import "./Styles/Scores.css";
import ScoresElement from "./Styles/ScoresElement.styled";
import ScoreContext from "../Store/context-score";

function Scores(props) {
  const ctx = useContext(ScoreContext);

  return (
    <ScoresElement>
      <div className="score">X : {ctx.ScoreContext.playerX_Score}</div>
      <div className="space"></div>
      <div className="score">O : {ctx.ScoreContext.playerO_Score}</div>
    </ScoresElement>
  );
}

export default Scores;
