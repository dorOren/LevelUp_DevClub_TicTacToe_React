import React from "react";
import "./WinningPage.css";

function WinningPage(props) {
  return (
    <div className={`${props.visibility}`} id="winningMessage">
      <div id="winningMessageText">{props.winner}</div>
      <button id="restartButton" onClick={props.restartBoard}>
        Restart
      </button>
    </div>
  );
}

export default WinningPage;
