import React, { useContext } from "react";
//import "./Styles/ResetBtn.css";
import ResetBtnElement from "./Styles/ResetBtnElement.styled";

function ResetBtn(props) {
  return <ResetBtnElement onClick={props.onClick}>reset</ResetBtnElement>;
}

export default ResetBtn;
