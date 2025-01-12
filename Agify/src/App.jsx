import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [data, setData] = useState("");
  const api = "https://official-joke-api.appspot.com/random_joke";
  // const input = useRef();

  // const setAges = () => {
  //   fetch(`https://api.agify.io?name=${input.current.value}`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // };

  const setjoke = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <>
      {/* <div className=" position-absolute top-50 start-50 translate-middle row gap-2 border border-secondary border-opacity-50 rounded px-2 w-25">
        <h4 className="text-center">Agify</h4>
        <div>
          <input
            ref={input}
            className="form-control"
            placeholder="Please Enter Your Name....."
          />
          <br></br>
          <button className="btn btn-danger" onClick={setAges}>
            Estimate Age
          </button>
        </div>
        <div>
          <label>Age: </label>
          <span className="fw-bold">{data ? data.age : ""}</span>
        </div>
      </div> */}
      <div className=" position-absolute top-50 start-50 translate-middle row gap-2 border border-secondary border-opacity-50 rounded px-2 w-25">
        <h4 className="text-center">Programming Joke</h4>
        <div>
          {/* <input
            // ref={input}
            className="form-control"
            placeholder="Please Enter Programming Language....."
          />
          <br></br> */}
          <button className="btn btn-danger" onClick={setjoke}>
            Show Joke
          </button>
        </div>
        <div>
          <label>Joke: </label>
          <span className="fw-bold">{data ? data.punchline : ""}</span>
        </div>
      </div>
    </>
  );
}

export default App;
