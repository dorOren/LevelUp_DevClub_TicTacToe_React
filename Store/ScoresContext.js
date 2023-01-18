import React, { useReducer } from "react";

const ScoreContext = React.createContext({
  playerX_Score: 0,
  playerO_Score: 0,
});

export function ScoresProvider(props) {
  const scoreReducer = (state, action) => {
    if (action.type === "X") {
      return {
        playerX_Score: state.playerX_Score + 1,
        playerO_Score: state.playerO_Score,
      };
    } else {
      return {
        playerX_Score: state.playerX_Score,
        playerO_Score: state.playerO_Score + 1,
      };
    }
  };

  const [playersScores, setScore] = useReducer(scoreReducer, {
    playerX_Score: 0,
    playerO_Score: 0,
  });

  const updateScores = (sign) => {
    setScore({ type: sign });
  };

  return (
    <ScoreContext.Provider value={{ playersScores, updateScores }}>
      {props.children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;

/*import React, { useContext, useReducer } from "react";

const ScoreContext = React.createContext();

export function useScores() {
  return useContext(ScoreContext);
}

export function ScoresProvider(props) {
  const scoreReducer = (state, action) => {
    if (action.type === "X") {
      return {
        playerX_Score: state.playerX_Score + 1,
        playerO_Score: state.playerO_Score,
      };
    } else {
      return {
        playerX_Score: state.playerX_Score,
        playerO_Score: state.playerO_Score + 1,
      };
    }
  };

  const [playersScores, setScore] = useReducer(scoreReducer, {
    playerX_Score: 0,
    playerO_Score: 0,
  });

  function UpdateScores(sign) {
    setScore({ type: sign });
  }

  return (
    <ScoreContext.Provider
      value={{
        ScoreContext: playersScores,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}
*/
