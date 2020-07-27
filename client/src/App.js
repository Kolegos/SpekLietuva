import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elements from "./content-management-system/Elements";
import HomePage from "./components/HomePage";
import Categories from "./content-management-system/Categories";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/elements" component={Elements} />
        <Route path="/admin/categories" component={Categories} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
