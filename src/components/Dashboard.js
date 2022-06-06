import React from "react";
import MenuBar from "./MenuBar";
import Movies from "./Movies";

function Dashboard(props) {
  return (
    <>
      <MenuBar value={props.value} />
      <Movies />
    </>
  );
}

export default Dashboard;
