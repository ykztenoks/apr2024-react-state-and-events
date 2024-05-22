import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  // STANDALONE FUNCTION
  // const toggleTheme = (e) => {setTheme(e.target.value)}

  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>
      <Counter count={count} setCount={setCount} />

      <select onChange={(e) => setTheme(e.target.value)}>
        {/* STANDALONE FUNCTION */}
        {/* <select onChange={toggleTheme}> */}

        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
