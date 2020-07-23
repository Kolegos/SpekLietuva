import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./content-management-system/Admin";
import Categories from "./content-management-system/Categories";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/categories" component={Categories} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
