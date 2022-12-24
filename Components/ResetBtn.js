import React from "react";
import "./ResetBtn.css";

function ResetBtn(props) {
  return (
    <button className="reset-button" onClick={props.onClick}>
      reset
    </button>
  );
}

export default ResetBtn;
