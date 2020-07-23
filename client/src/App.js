import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Admin from "./content-management-system/Admin";
import Categories from "./content-management-system/Categories";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/categories" component={Categories}/>
        <Route exact path="/admin" component={Admin}/>
        <Route path="/home" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
