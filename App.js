import React, { useState, useReducer, useContext } from "react";
import Game from "./Components/Game";
import { HistoryProvider } from "./Store/HistoryContext";
import { ScoresProvider } from "./Store/ScoresContext";

function App() {
  return (
    <HistoryProvider>
      <ScoresProvider>
        <Game />
      </ScoresProvider>
    </HistoryProvider>
  );
}
export default App;
