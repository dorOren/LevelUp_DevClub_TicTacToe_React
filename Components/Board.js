import React from "react";
import "./Board.css";
import Cell from "./Cell.js";

function Board(props) {
  return (
    <div className={`board ${props.visibility}`}>
      {props.board.map((mark, index) => {
        return (
          <Cell mark={mark} key={index} onClick={() => props.onClick(index)} />
        );
      })}
    </div>
  );
}

export default Board;
