import React from "react";
import Button from "./Button";
import DropDown from "./DropDown";

function MenuBar(props) {
  const Style = {
    Container: {
      height: "10vh",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 5%",
    },
  };
  return (
    <div style={Style.Container}>
      <div style={{ fontSize: "1.5rem" }}>
        Select Genre:
        <DropDown parentCallBack={props.parentCallBack} />
      </div>

      <div>
        <Button stateChanger={props.stateChanger} />
      </div>
    </div>
  );
}
export default MenuBar;
