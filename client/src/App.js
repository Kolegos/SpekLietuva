import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./content-management-system/Admin";
import Categories from "./content-management-system/Categories";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/categories" component={Categories}/>
        <Route exact path="/admin" component={Admin}/>
      </Switch>
    </Router>
  );
}

export default App;
