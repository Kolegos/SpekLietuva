import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSearchClick(e) {
    e.preventDefault();

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&region=lt&language=lt&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`
      )
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
      });
  }
  return (
    <div>
      <h4>Įvesk užklausą</h4>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button onClick={handleSearchClick}>Ieškoti</button>
      <div>
        {results.map((result) => {
          return (
            <div>
              {result.photos ? (
                <>
                  <p>Rezultato vardas {result.name}</p>
                  <p>
                    Rezultato nuotraukos id {result.photos[0].photo_reference}
                  </p>
                  <p>Rezultato vietos id {result.place_id}</p>
                  <button>Pridėti į duomenų bazę</button>

                  <div>
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=200&maxwidth=200&photoreference=${result.photos[0].photo_reference}&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`}
                    ></img>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
