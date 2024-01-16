import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter % 2 === 0) {
      alert("Counter is even number");
    } else {
      alert("Counter is odd number");
    }
  }, [counter]);

  console.log(counter, "COUNTER");

  return (
    <div>
      <div>
        <h2>WELCOME TO MY FIRST REACT APP</h2>
      </div>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <div className="counter">
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>
              <Counter counterNum={counter} />
            </div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
          </div>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
};

export default App;
