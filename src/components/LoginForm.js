import React, { useState } from "react";
import { credential } from "../Data/Credentials";
import Dashboard from "./Dashboard";

function LoginForm() {
  const Style = {
    Container: {
      // width: "100vh",
      height: "100vh",
      fontFamily: "Arial, Helvetica, sans-serif",
      // backgroundImage: "../IMG_4913.JPG",
      backgroundColor: "#242F9B",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      backgroundColor: "#646FD4",
      height: "50vh",
      width: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "30px",
      color: "white",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState("");

  const checkCredentials = () => {
    {
      credential.map((data) => {
        if (data.email == email && data.password === password) {
          console.log("data matched");

          return <Dashboard />;
        }
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    checkCredentials();
  };

  return (
    <>
      <div style={Style.Container}>
        <form style={Style.form}>
          <label style={{ fontSize: "2.5rem" }} htmlFor="email">
            Email
          </label>
          <input
            style={{ width: "50%", height: "2rem" }}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={{ fontSize: "2.5rem" }} htmlFor="password">
            Password
          </label>
          <input
            style={{ width: "50%", height: "2rem" }}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={submitForm}
            style={{ width: "20%", height: "2rem", marginTop: "3rem" }}
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
