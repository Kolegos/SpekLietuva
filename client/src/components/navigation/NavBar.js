import React, { useEffect } from "react";
import "../../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../misc/Spinner";
import { useHistory } from "react-router-dom";
import backgroundImage from "../../background.jpg";
import backgroundImageBlur from "../../background_blur.jpg";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    return () => {
      document.body.style.backgroundImage = `url(${backgroundImageBlur})`;
    };
  }, []);

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
          <button
            className="glow-on-hover"
            type="button"
            onClick={() => history.push("/categories")}
          >
            Kategorijos
          </button>
          {isAuthenticated ? (
            <button
              className="glow-on-hover"
              type="button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Atsijungti
            </button>
          ) : (
            <>
              <button
                className="glow-on-hover"
                type="button"
                onClick={() => loginWithRedirect()}
              >
                Prisijungti
              </button>
              <button
                className="glow-on-hover"
                type="button"
                onClick={() => loginWithRedirect({ screen_hint: "signup" })}
              >
                Užsiregistruoti
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
