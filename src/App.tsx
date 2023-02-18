import React, { Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import { createContext } from "react";
import Login from "./screens/Login.tsx";
import Dashboard from "./screens/Dashboard.tsx";

type LoginType = {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const LoginContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        {loggedIn ? <Dashboard /> : <Login />}
      </LoginContext.Provider>
    </>
  );
}

export default App;
