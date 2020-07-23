import React, { useState } from "react";
import axios from "axios";

const Elements = () => {
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState({});

  const url =
    process.env.NODE_ENV === `production`
      ? `/api/categories`
      : "http://localhost:5000/api/elements";

  function handleSearchClick(e) {
    e.preventDefault();
    axios.get(url + "/getId", { params: { queryToApi: query } }).then((res) => {
      if (res.status != 200) alert("Įvyko klaida susisiekiant su Maps API");
      setPlace(res.data);
    });
    axios
      .get(url + "/getPhotos", { params: { placeID: place.place_id } })
      .then((res) => {
        if (res.status != 200) alert("Įvyko klaida susisiekiant su Maps API");
        setPlace({ ...place, photos: res.data });
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
      {Object.keys(place).length === 0 ? null : (
        <div>
          <h3>{place.name}</h3>
          <h4>{console.log(process.env.API_KEY, "nu")} nu</h4>
          <h4>
            {place.geometry.location.lat} {place.geometry.location.lng}
          </h4>
          <div>
            {place.photos.map((photo, index) => {
              return (
                <img
                  key={index}
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=600&photoreference=${photo.photo_reference}&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`}
                ></img>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Elements;
