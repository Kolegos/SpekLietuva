import React, { useState } from "react";
import axios from "axios";

const Maps = () => {
  const [churches, setChurches] = useState([]);
  const [showChurches, setShowChurches] = useState(false);

  const [attractions, setAttractions] = useState([]);
  const [showAttractions, setShowAttractions] = useState(false);

  function handleClickChurch() {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=54.687157,25.279652&radius=50000&language=lt&type=church&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY"
      )
      .then((res) => {
        console.log(res);
        const { name } = res.data.results[0];
        const photoReference = res.data.results[0].photos[0].photo_reference;
        console.log(photoReference);
        setChurches(res.data.results);
      });
  }
  function handleClickTourist() {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=54.687157,25.279652&radius=50000&language=lt&type=tourist_attractions&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY"
      )
      .then((res) => {
        console.log(res);
        const { name } = res.data.results[0];
        const photoReference = res.data.results[0].photos[0].photo_reference;
        console.log(photoReference);
        setAttractions(res.data.results);
      });
  }

  return (
    <div>
      <button onClick={handleClickChurch}>Duok baznyciu</button>
      <button
        onClick={() =>
          showChurches === true ? setShowChurches(false) : setShowChurches(true)
        }
      >
        Rodyti baznycias
      </button>
      <button onClick={handleClickTourist}>Duok turistu atrakciju</button>
      <button
        onClick={() =>
          showAttractions === true
            ? setShowAttractions(false)
            : setShowAttractions(true)
        }
      >
        Rodyti turistu atrakcijas
      </button>
      <div>
        {churches.length === 0 || showChurches === false ? null : (
          <div>
            {churches.map((church) => {
              return (
                <div key={church.name}>
                  <p>{church.name}</p>
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=200&maxwidth=200&photoreference=${church.photos[0].photo_reference}&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`}
                  ></img>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {attractions.length === 0 || showAttractions === false ? null : (
          <div>
            {attractions.map((attraction) => {
              {
                console.log(attraction);
              }
              return attraction.photos ? (
                <div key={attraction.name}>
                  <p>{attraction?.name}</p>
                  {attraction?.photos[0]?.photo_reference ? (
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=200&maxwidth=200&photoreference=${attraction.photos[0].photo_reference}&key=AIzaSyAVyeg8CYlyD_D1rvejnzkhSjNjvKvSAKY`}
                    ></img>
                  ) : null}
                </div>
              ) : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Maps;
