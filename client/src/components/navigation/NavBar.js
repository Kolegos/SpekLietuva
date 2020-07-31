import React, { Component } from "react";
import "../../App.css";

class NavBar extends Component{
    render(){
        return(
            <div class="BackroundImg overlay">
                <img 
                src="https://www.makalius.lt/wp-content/gallery/nida-galerija-6-foto-paid/nida-laikrodis-saules-13746.jpg?v=11e6b9b030871d14"/>
                <div class="containerForNav">
                <p><button class="centeredHomePageTitle" type="button">Spėk Lietuvą!</button></p>
                <div class="overlay"></div>
                <div class="buttonNav">
                    <a href="#"> 
                    <button class="glow-on-hover" type="button">Kategorijos</button> 
                    </a>
                    <a href="#"> 
                        <button class="glow-on-hover" type="button">Prisijungimas</button> 
                    </a>
                    <a href="#"> 
                        <button class="glow-on-hover" type="button">Registracija</button> 
                    </a>
                </div>
                </div>
                
            </div>
            
        )
    }
}
export default NavBar;

