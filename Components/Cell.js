import React from "react";
//import "./Styles/Cell.css";
import CellElement from "./Styles/CellElement.styled";

function Cell(props) {
  return (
    <CellElement xTurn={props.mark == "X"} onClick={props.onClick}>
      {props.mark}
    </CellElement>
  );
}

export default Cell;
