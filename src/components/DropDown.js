import React, { useState } from "react";
import Movies from "./Movies";
function DropDown() {
  const [state, setState] = useState({ genre: "default" });
  const [data, setData] = useState("");

  const changeState = () => {
    setState({
      genre: data,
    });
  };

  return (
    <div>
      <select value={data} onChange={(e) => setData(e.target.value)}>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="anime">Anime</option>
        <option value="romance">Romance</option>
        <option value="thriling">Thriling</option>
        <option value="mystery">Mystery</option>
      </select>

      <button onClick={changeState} type="button">
        Show Movies
      </button>
      {/* <Movies genre={state.genre} /> */}
      {/* <p>{state.genre}</p> */}
    </div>
  );
}

export default DropDown;
