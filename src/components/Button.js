import React, { forwardRef } from "react";
function Button(props) {
  return (
    <button
      style={{
        backgroundColor: "white",
        border: "none",
        color: "black",
        padding: "10px 20px",
        borderRadius: "25px",
        fontSize: "15px",
        cursor: "pointer",
      }}
      onClick={props.stateChanger}
    >
      Sign Out
    </button>
  );
}
export default Button;
