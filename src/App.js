import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "DOUBLE-INCREMENT" })}>
          Double Increment
        </button>
        <button onClick={() => dispatch({ type: "DOUBLE-DECREMENT" })}>
          Double Decrement
        </button>
        <button onClick={() => dispatch({ type: "TRIPLE-INCREMENT" })}>
          Triple Increment
        </button>
        <button onClick={() => dispatch({ type: "TRIPLE-DECREMENT" })}>
          Triple Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
