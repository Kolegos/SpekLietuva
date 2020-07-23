import React, { Component } from "react";
import '../App.css';

class CategoriesCards extends Component {
    render() {
      return (
        <div>
          <div class="card">
        <img src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg" 
        alt="Avatar"
         />
        <div class="container">
          <h4><b>Mountains</b></h4>
          <img class="cardImg" src="https://i.pinimg.com/originals/9c/6c/0d/9c6c0dbafebc090d4e28cd53cb23fe3a.jpg"/>
       
        </div>
        </div>
        <div class="card">
        <img src="https://www.testas.krikscioniskifilmai.lt/wp-content/uploads/Pretty-Church.jpg" 
        alt="Avatar"
         />
        <div class="container">
          <h4><b>Churches</b></h4>
          <img class="cardImg" src="https://i.pinimg.com/originals/9c/6c/0d/9c6c0dbafebc090d4e28cd53cb23fe3a.jpg"/>
        </div>
        </div>
        </div>
     
      );
    }
  }
  export default CategoriesCards;