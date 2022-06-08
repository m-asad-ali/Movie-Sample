import React, { useState } from "react";

function DropDown(props) {
  const [state, setState] = useState({ genre: "default" });
  const [data, setData] = useState("");

  const changeState = () => {
    setState({
      genre: data,
    });
    console.log("data in dropdown: " + data);
    props.parentCallBack(data);
  };

  return (
    <div>
      <select value={data} onChange={(e) => setData(e.target.value)}>
        <option selected value="all">
          All
        </option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
        <option value="SciFi">SciFi</option>
        <option value="drama">Drama</option>
        <option value="anime">Anime</option>
        <option value="thriling">Thriling</option>
        <option value="mystery">Mystery</option>
      </select>

      <button onClick={changeState} type="button">
        Show Movies
      </button>
    </div>
  );
}

export default DropDown;
