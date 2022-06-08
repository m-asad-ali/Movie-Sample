import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Movies from "./Movies";

function Dashboard(props) {
  const [genre, setGenre] = useState("Not-Set-Yet");

  const handelCallBack = (data) => {
    setGenre(data);
  };

  return (
    <>
      <MenuBar
        stateChanger={props.stateChanger}
        parentCallBack={handelCallBack}
      />
      <Movies category={genre} />
    </>
  );
}

export default Dashboard;
