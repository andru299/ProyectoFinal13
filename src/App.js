import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/LoginPage/PrivateRoute";
import Login from "./components/LoginPage/Login";
import Character from "./components/Character";
import Home from "./components/Home";
import Detalle from "./components/Detalle"; // Importa el componente Detalle
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1 className="title">Nuevas Amistades</h1>
          </div>
          <div className="text-container">
            <h1 className="text">
              Aquí encontrarás nuevas amistades de manera aleatoria
            </h1>
          </div>
          <Switch>
            <Route exact path="/login">
              {isLoggedIn ? <Redirect to="/home" /> : <Login onLogin={handleLogin} />}
            </Route>
            <PrivateRoute path="/home" component={Home} isAuthenticated={isLoggedIn} />
            <PrivateRoute path="/character" component={Character} isAuthenticated={isLoggedIn} />
            <PrivateRoute path="/detalle/:id" component={Detalle} isAuthenticated={isLoggedIn} /> {/* Ruta protegida con PrivateRoute */}
            <Redirect to="/login" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
