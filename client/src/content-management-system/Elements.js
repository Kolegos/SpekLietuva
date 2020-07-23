import React, { useState, useEffect } from "react";
import axios from "axios";

const Elements = () => {
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState({});
  const [links, setLinks] = useState([]);
  const [imageLink, setImageLink] = useState("");
  const [loadUrls, setLoadUrls] = useState(0);
  const [loadReferences, setLoadReference] = useState(0);

  const url =
    process.env.NODE_ENV === `production`
      ? `/api/categories`
      : "http://localhost:5000/api/elements";

  useEffect(() => {
    if (loadReferences !== 0) {
      axios
        .get(url + "/getPhotosInfo", { params: { placeID: place.place_id } })
        .then((res) => {
          if (res.status !== 200)
            alert("Įvyko klaida susisiekiant su Maps API");
          setPlace({ ...place, photosInfo: res.data });
          setLoadUrls(loadUrls + 1);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadReferences]);

  useEffect(() => {
    if (loadUrls !== 0) {
      let linksToSet = [];
      let promises = [];
      // eslint-disable-next-line
      place.photosInfo.map((photo) => {
        promises.push(
          axios
            .get(url + "/getPhoto", {
              params: {
                reference: photo.photo_reference,
              },
            })
            .then((res) => {
              linksToSet.push(res.data);
            })
        );
      });
      Promise.all(promises).then(() => setLinks(linksToSet));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadUrls]);

  function handleSearchClick(e) {
    e.preventDefault();
    axios.get(url + "/getId", { params: { queryToApi: query } }).then((res) => {
      if (res.status !== 200) alert("Įvyko klaida susisiekiant su Maps API");
      setPlace(res.data);
      setLoadReference(loadReferences + 1);
    });
  }
  return (
    <div>
      <h4>Įvesk užklausą</h4>
      <div>
        <label htmlFor="query">Užklausa</label>
        <input
          name="query"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="img">Paveikslėlio nuoroda</label>
        <input
          name="img"
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={handleSearchClick}>Ieškoti</button>
      {Object.keys(place).length === 0 ? null : (
        <div>
          <h3>{place.name}</h3>
          <h4>
            {place.geometry.location.lat} {place.geometry.location.lng}
          </h4>
          <div>
            {links.length !== 0
              ? links.map((link, index) => {
                  return <img src={link} alt="" key={index}></img>;
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Elements;
