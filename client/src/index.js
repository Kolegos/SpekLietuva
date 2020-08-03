import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import dotenv from "dotenv";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

dotenv.config();
ReactDOM.render(
  <Auth0Provider
    domain="dev-j3v6lvud.eu.auth0.com"
    clientId="xbUd6r7Exw5LWIh86wF0XumQr0SpVIch"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
