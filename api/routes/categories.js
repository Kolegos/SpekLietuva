const { Router, Request, Response } = require("express");
const connection = require("./database");
const route = Router();

module.exports = (app) => {
  app.use("/categories", route);
  route.get("/get", (req, res) => {
    connection.query(`SELECT * FROM spek_lietuva.category`, (err, results) => {
      if (err) throw err;
      //res.send("parejo rezultatai");
      res.json(results);
    });
  });
};
