import { useState } from 'react';

function useHistory(initialState) {
  const [history, setHistory] = useState([initialState]);
  const [index, setIndex] = useState(0);

  const current = history[index];
  
  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
    }
  };

  const setState = (newState) => {
    // Удаляем все состояния после текущего индекса (если мы сделали undo и потом изменили состояние)
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, newState]);
    setIndex(newHistory.length);
  };

  return [current, setState, undo, redo, history, index];
}

export default useHistory;