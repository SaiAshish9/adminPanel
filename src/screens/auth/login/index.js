import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Context as AuthContext } from "../../../contexts/authContext";

const Login = ({ Container, AuthForm, AuthType, Btn, Inp }) => {
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { signin } = useContext(AuthContext);

  const onSubmit = (data) => {
    if (username && password) {
      signin(username, password);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthType>Login</AuthType>
        <Inp
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          ref={register}
        />
        <Inp
          name="password"
          placeholder="Password"
          value={password}
          ref={register}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Btn htmlType="submit">Login</Btn>
      </AuthForm>
    </Container>
  );
};

export default Login;
