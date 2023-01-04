import React from "react";
//import "./Styles/WinningPage.css";
import WinningPageElement from "./Styles/WinningPageElement.styled";

function WinningPage(props) {
  return (
    <WinningPageElement visible={props.visibility}>
      <div id="winningMessageText">{props.winner}</div>
      <button id="restartButton" onClick={props.restartBoard}>
        Restart
      </button>
    </WinningPageElement>
  );
}

export default WinningPage;
