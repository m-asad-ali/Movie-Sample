import React, { useState } from "react";
import "./index.css";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [showPage, setShowPage] = useState(true);

  const handelState = () => {
    setShowPage(!showPage);
  };

  return (
    <>
      {showPage ? (
        <LoginForm stateChanger={handelState} />
      ) : (
        <Dashboard stateChanger={handelState} />
      )}
    </>
  );
}

export default App;
