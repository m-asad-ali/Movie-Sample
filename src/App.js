import React, { useState } from "react";
import "./index.css";

import MenuBar from "./components/MenuBar";
import Movies from "./components/Movies";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [showPage, setShowPage] = useState(true);

  const handelState = () => {
    setShowPage(!showPage);
  };

  if (showPage) {
    return <LoginForm stateChanger={handelState} />;
  } else {
    return <Dashboard stateChanger={handelState} />;
  }

  // return (
  //   <>
  //     {showPage ? (
  //       <LoginForm stateChanger={handelState} />
  //     ) : (
  //       <Dashboard stateChanger={handelState} />
  //     )}

  //     {/* <LoginForm /> */}
  //     {/* <Dashboard /> */}
  //   </>
  // );
}

export default App;
