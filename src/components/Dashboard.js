import React from "react";
import MenuBar from "./MenuBar";
import Movies from "./Movies";

function Dashboard(props) {
  return (
    <>
      <MenuBar stateChanger={props.stateChanger} />
      <Movies />
    </>
  );
}

export default Dashboard;
