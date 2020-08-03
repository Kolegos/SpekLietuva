import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elements from "./content-management-system/Elements";
import HomePage from "./components/HomePage";
import Categories from "./content-management-system/Categories";
import Questions from "./components/Questions";
import ScoreBar from "./components/ScoreBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/elements" component={Elements} />
        <Route path="/admin/categories" component={Categories} />
        <Route
          path="/home/category"
          component={() => <Questions categoryID={6} />}
        />
        <Route path="/nu" component={ScoreBar} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
