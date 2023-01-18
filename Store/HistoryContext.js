import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryContext = React.createContext();

export function HistoryProvider(props) {
  const [history, setHistory] = useState([]);
  const [isPageRefreshed, SetIsPageRefreshed] = useState(false);

  const addToHistory = (item) => {
    setHistory([...history, item]);
  };

  useEffect(() => {
    SetIsPageRefreshed(true);
    axios.get("http://localhost:3001/").then((response) => {
      if (response.data) {
        setHistory(response.data);
      }
    });
  }, []);

  useEffect(() => {
    if (history && history.length && !isPageRefreshed) {
      axios.post("http://localhost:3001/", history[history.length - 1]);
    }
    SetIsPageRefreshed(false);
  }, [history]);

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
}
export default HistoryContext;
