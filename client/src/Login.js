import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, email } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) loginWithRedirect();
  }, []);

  return <div>{email}</div>;
};

export default Login;
