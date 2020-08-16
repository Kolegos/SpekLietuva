import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./navigation/NavBar";

const HomePage = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Palauk tevai</h1>;
  }

  return (
    <div>
      <NavBar />
      {isAuthenticated ? (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Atsijungti
          </button>
          <Link to="/profile">Profilis</Link>
        </>
      ) : (
        <>
          <button onClick={() => loginWithRedirect()}>Prisijungti</button>
          <button onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
            Užsiregistruoti
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
