import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState("");

  async function render() {
    const API = "http://localhost:8080/";
    const res = await axios.get(API);
    setData(res.data);
  }

  return (
    <div className="App">
      <button onClick={render}>CLICK HERE</button>
      <h2>{Data}</h2>
    </div>
  );
}

export default App;
