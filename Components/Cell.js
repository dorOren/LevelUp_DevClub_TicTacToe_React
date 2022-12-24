import React from "react";
import "./Cell.css";

function Cell(props) {
  return (
    <div className={`cell ${props.mark}`} onClick={props.onClick}>
      {props.mark}
    </div>
  );
}

export default Cell;
