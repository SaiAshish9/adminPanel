import React, { useContext } from "react";
import Dashboard from "./screens/dashboard";
import { BrowserRouter } from "react-router-dom";
import Cookie from "js-cookie";
import Auth from "./screens/auth";
import { Context as AuthContext } from "./contexts/authContext";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {state.is_logged_in ? <Dashboard /> : <Auth />}
    </BrowserRouter>
  );
};

export default App;
