import React from "react";
import "../../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../misc/Spinner";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="BackroundImg">
      <div className="containerForNav">
        <p>
          <button className="centeredHomePageTitle" type="button">
            Spėk Lietuvą!
          </button>
        </p>
        <div className="buttonNav">
          <a href="/categories">
            <button className="glow-on-hover" type="button">
              Kategorijos
            </button>
          </a>
          {isAuthenticated ? (
            <a href="#">
              <button
                className="glow-on-hover"
                type="button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Atsijungti
              </button>
            </a>
          ) : (
            <>
              <a href="">
                <button
                  className="glow-on-hover"
                  type="button"
                  onClick={() => loginWithRedirect()}
                >
                  Prisijungti
                </button>
              </a>
              <a href="">
                <button
                  className="glow-on-hover"
                  type="button"
                  onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                >
                  Užsiregistruoti
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
