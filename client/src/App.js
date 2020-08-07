import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Elements from "./content-management-system/Elements";
import HomePage from "./components/HomePage";
import Categories from "./content-management-system/Categories";
import Questions from "./components/Questions";
import AuthProviderWithHistory from "./components/AuthProviderWithHistory";
import ProfilePage from "./components/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import ScoreBar from "./components/ScoreBar";
import CardsPage from "./components/CategoriesPage/CategoriesCard";

function App() {
  return (
    <Router>
      <AuthProviderWithHistory>
        <Switch>
          <PrivateRoute path="/admin/elements" component={Elements} />
          <PrivateRoute path="/admin/categories" component={Categories} />
          <Route
            path="/home/category"
            component={() => <Questions categoryID={6} />}
          />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/categories" component={CardsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </AuthProviderWithHistory>
    </Router>
  );
}

export default App;
