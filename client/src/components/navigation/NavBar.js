import React, { Component } from "react";
import "../../App.css";

class NavBar extends Component{
    render(){
        return(
            <div class="containerHomePage">
                <div class="BackroundImg">
                    <img width="1500px" height="750px" 
                    src="https://www.guliveriokeliones.lt/files/2019-02/9898_slider.jpg"/>
                </div>
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
            /*<div class="topNavBar">
            <b><div class="NameOfTheSite">Spėk Lietuvą</div></b>
            <a class="red" href="/log in">Prisijungti</a>
            <a class="green" href="#news">Turnyrinė lentelė</a>
            <a class="yellow" href="#news">Kazkas</a>
            <c href=""><img height="50px" width="400px" 
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg"/></c>
          
            </div>*/
        )
    }
}
export default NavBar;

