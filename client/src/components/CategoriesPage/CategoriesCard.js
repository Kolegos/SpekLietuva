import '../../App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  process.env.NODE_ENV === `production`
    ? `/api/categories`
    : "http://localhost:5000/api/categories";
const CategoriesCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + "/get").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="parent">
      {categories.map((category) => (
      <div class="box">
      <div key={category.category_id} >
            <div class="container">
              <img src={category.photo} 
              alt="Avatar" class="image"/>
                  <div class="middle">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                  <button  class="btn"><i class="fa fa-play"></i></button>
                  </div>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
};

export default CategoriesCards;

