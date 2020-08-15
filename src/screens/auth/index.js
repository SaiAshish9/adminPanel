import React from "react";
import { Container, AuthForm, AuthType, Btn, Inp } from "./index.styles";
import Login from "./login";

const Auth = () => {
  return (
    <>
      <Login
        Container={Container}
        AuthForm={AuthForm}
        AuthType={AuthType}
        Btn={Btn}
        Inp={Inp}
      />
    </>
  );
};

export default Auth;
