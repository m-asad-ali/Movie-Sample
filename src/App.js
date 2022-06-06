import React, { useState } from "react";
import "./index.css";

import MenuBar from "./components/MenuBar";
import Movies from "./components/Movies";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [showPage, setShowPage] = useState(true);
  return (
    <>
      {showPage ? <LoginForm /> : <Dashboard value={showPage} />}

      {/* <LoginForm /> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
