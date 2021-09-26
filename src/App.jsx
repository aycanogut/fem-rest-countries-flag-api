import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
