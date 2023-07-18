import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Redirect } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogin = () => {
    // Verificar las credenciales de inicio de sesión
    if (username === "usuario" && password === "contraseña") {
      // Inicio de sesión exitoso
      setError("");
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      onLogin();
    } else {
      // Credenciales inválidas
      setError("Credenciales inválidas");
    }
  };

  return (
    <div>
      {isLoggedIn && <Redirect to="/home" />}
      <div className="login-container">
        <h2 style={{ fontSize: "16px", color: "green" }}>Login</h2>
        <Form>
          <Form.Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button primary onClick={handleLogin}>
            Login
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default Login;