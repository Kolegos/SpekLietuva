import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [query, setQuery] = useState("");

  function handleSearchClick(e) {
    e.preventDefault();

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&region=lt&language=lt&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`
      )
      .then((res) => {
        console.log(res.data.results);
      });
  }
  return (
    <div>
      <h4>Input your query</h4>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Admin;
