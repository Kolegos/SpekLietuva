const { Router, Request, Response } = require("express");
const axios = require("axios");
const route = Router();
const checkJwt = require("../auth/checkJwt");
const checkRole = require("../auth/checkRole");

module.exports = (app) => {
  app.use("/elements", route);

  route.get("/checkAuth", checkJwt, checkRole("admin"), (req, res) => {
    res.sendStatus(200);
  });

  route.get("/getId", (req, res) => {
    const query = req.query.queryToApi;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&region=lt&language=lt&key=${process.env.API_KEY}`
      )
      .then((response) => {
        res.send(response.data.results[0]);
      });
  });

  route.get("/getPhotosInfo", (req, res) => {
    const placeID = req.query.placeID;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&region=lt&language=lt&key=${process.env.API_KEY}`
      )
      .then((response) => {
        if (response.data.result) res.json(response.data.result.photos);
      });
  });

  route.get("/getPhoto", (req, res) => {
    const reference = req.query.reference;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=600&photoreference=${req.query.reference}&key=${process.env.API_KEY}`
      )
      .then((response) => {
        res.send(response.request._redirectable._options.href);
      });
  });
};
