import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elements from "./content-management-system/Elements";
import Categories from "./content-management-system/Categories";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/categories" component={Categories} />
        <Route path="/admin/elements" component={Elements} />
      </Switch>
    </Router>
  );
}

export default App;
