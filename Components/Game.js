import React, { useState, useReducer, useContext } from "react";
import Board from "./Board";
import WinningPage from "./WinningPage";
import HistoryContext from ".././Store/HistoryContext";
import ScoreContext from ".././Store/ScoresContext";

const X_SIGN = "X";
const O_SIGN = "O";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winningText, setWinningText] = useState("");
  const [xTurn, setTurn] = useState(true);
  const [gameOver, setGameStatus] = useState(false);
  const { addToHistory } = useContext(HistoryContext);
  const { updateScores } = useContext(ScoreContext);

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const board_Clicked = (id) => {
    const updateBoard = board.map((mark, index) => {
      if (id == index && board[index] == null) {
        swapTurns();
        if (xTurn) {
          return X_SIGN;
        } else {
          return O_SIGN;
        }
      } else {
        return mark;
      }
    });
    setBoard(updateBoard);

    const winnerSign = checkWinner(updateBoard);
    if (winnerSign) {
      winnerSign == X_SIGN ? updateScores(X_SIGN) : updateScores(O_SIGN);
      endGame(false);
    } else if (checkDraw(updateBoard)) {
      endGame(true);
    }
  };

  const mark = () => {};

  const checkWinner = (board) => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [x, y, z] = WINNING_COMBINATIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const checkDraw = (board) => {
    for (const cell of board) {
      if (cell == null) {
        return false;
      }
    }
    return true;
  };

  const swapTurns = () => {
    setTurn(!xTurn);
  };

  const endGame = (draw) => {
    setGameStatus(true);
    setWinningText(draw ? "Draw!" : `${xTurn ? "X's" : "O's"} Wins!`);
    addGameToHistory(draw ? "Tie" : `${xTurn ? "X's" : "O's"}`);
  };

  const addGameToHistory = (winner) => {
    const date = new Date().toISOString();
    addToHistory({ winner, date });
  };

  const restartBtn_Clicked = () => {
    setBoard(Array(9).fill(null));
    setGameStatus(false);
    setTurn(X_SIGN);
  };

  return (
    <>
      <Board
        board={board}
        onClick={board_Clicked}
        onResetClick={restartBtn_Clicked}
        visibility={gameOver ? "hide" : null}
      ></Board>
      <WinningPage
        winner={winningText}
        restartBoard={restartBtn_Clicked}
        visibility={gameOver}
      ></WinningPage>
    </>
  );
}
export default Game;
