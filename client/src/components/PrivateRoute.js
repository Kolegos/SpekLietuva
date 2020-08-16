import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
<<<<<<< HEAD
import Spinner from "../misc/Spinner";

const PrivateRoute = ({ component, role, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Spinner />,
      })}
      {...args}
    />
  );
};
=======

const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <h1>Palauk Tėvai</h1>,
    })}
    {...args}
  />
);
>>>>>>> 633946a15bef039afe801e3447ac2e0d48619b25

export default PrivateRoute;
