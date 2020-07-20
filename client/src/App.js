import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/homePage">
          <HomePage />
        </Route>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
