import React, { Component } from "react";
import "../../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="BackroundImg" >
        <div className="containerForNav" >
          <p>
            <button className="centeredHomePageTitle" type="button">
              Spėk Lietuvą!
            </button>
          </p>
          <div className="buttonNav">
            <a href="categories">
              <button className="glow-on-hover" type="button">
                Kategorijos
              </button>
            </a>
            <a href="#s">
              <button className="glow-on-hover" type="button">
                Prisijungimas
              </button>
            </a>
            <a href="#s">
              <button className="glow-on-hover" type="button">
                Registracija
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
