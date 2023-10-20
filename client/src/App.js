import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState("");
  const [Number, setNumber] = useState(0);
  const [Query, setQuery] = useState("");
  const [Forms, setForms] = useState({});

  async function render() {
    const API = "http://localhost:8080/";
    const res = await axios.get(API);
    setData(res.data);
  }

  async function randomNum() {
    const API1 = `http://localhost:8080/game?searched=${Query}`;
    const res1 = await axios.get(API1);
    setNumber(res1.data);
    console.log("AP1 query");
  }

  const handleInputChange = (event) => {
    // event.preventDefault();
    setQuery(event.target.value);
    console.log("HandleInput query");
  };

  const handlePost = (event) => {
    setForms(event.target.value);
    console.log("Post sent successfuylly");
  };

  useEffect(() => {
    render();
  });

  return (
    <div className="App">
      <h1>THIS PAGE HAS A HIDDEN GEM BELOW CLICK ON THE BUTTON</h1>
      <form>
        <input onChange={handleInputChange}></input>
        <button type="button" onClick={randomNum}>
          SUBMIT
        </button>
      </form>
      <h2>{Data}</h2>
      <h3>{Number}</h3>
    </div>
  );
}

export default App;
