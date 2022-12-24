import React from "react";
import "./Board.css";
import Cell from "./Cell.js";
import ResetBtn from "./ResetBtn";

function Board(props) {
  return (
    <div className="board">
      {props.board.map((mark, index) => {
        return (
          <Cell mark={mark} key={index} onClick={() => props.onClick(index)} />
        );
      })}
      <ResetBtn onClick={props.onResetClick} />
    </div>
  );
}

export default Board;
