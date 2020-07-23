const { Router, Request, Response } = require("express");
const route = Router();
const checkJwt = require("../checkJwt");

module.exports = (app) => {
  app.use(route);

  route.get("/public", function (req, res) {
    res.json({
      message:
        "Hello from a public endpoint! You don't need to be authenticated to see this.",
    });
  });

  // This route needs authentication
  route.get("/private", checkJwt, function (req, res) {
    res.json({
      message:
        "Hello from a private endpoint! You need to be authenticated to see this.",
    });
  });
};
