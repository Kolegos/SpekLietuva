import "../../App.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const url =
  process.env.NODE_ENV === `production`
    ? `/api/categories`
    : "http://localhost:5000/api/categories";

const CategoriesCards = () => {
  const [categories, setCategories] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get(url + "/getPublic").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="parent">
      {categories.map((category) => (
        <div
          className="box"
          style={{ height: window.screen.width > 1280 ? "20em" : "10em" }}
          key={category.category_id}
        >
          {console.log(window.screen.height)}
          <div
            className="container"
            style={{ height: window.screen.width > 1280 ? "19em" : "9em" }}
            key={category.category_id}
            onClick={() => {
              history.push(`/category/${category.category_id}`);
            }}
          >
            <p>{category.name}</p>
            <img src={category.photo} alt="Avatar" className="image" />
            <div className="middle">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <button className="btn">
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCards;
