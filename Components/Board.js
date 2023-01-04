import React from "react";
//import "./Styles/Board.css";
import BoardElement from "./Styles/BoardElement.styled";
import Cell from "./Cell.js";
import ResetBtn from "./ResetBtn";
import Scores from "./Scores";

function Board(props) {
  return (
    <BoardElement>
      <Scores />
      {props.board.map((mark, index) => {
        return (
          <Cell mark={mark} key={index} onClick={() => props.onClick(index)} />
        );
      })}
      <ResetBtn onClick={props.onResetClick} />
    </BoardElement>
  );
}

export default Board;
