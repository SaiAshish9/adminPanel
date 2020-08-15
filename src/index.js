import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { GlobalStyle } from "./styles";
import { Provider as AuthProvider } from "./contexts/authContext";

ReactDOM.render(
  <AuthProvider>
    <GlobalStyle />
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
