import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState("");
  const [Number, setNumber] = useState(0);
  useEffect(() => {
    randonNumber();
  }, [Data]);

  async function render() {
    const API = "http://localhost:8080/";
    const res = await axios.get(API);
    setData(res.data);
  }

  async function randonNumber() {
    const API1 = "http://localhost:8080/game";
    const res1 = await axios.get(API1);
    setNumber(res1.data);
  }

  return (
    <div className="App">
      <h1>THIS PAGE HAS A HIDDEN GEM BELOW CLICK ON THE BUTTON</h1>
      <button onClick={render}>CLICK HERE</button>
      <h2>{Data}</h2>
      <h3>Your Lucky Number For Today is {Number}</h3>
    </div>
  );
}

export default App;
