const { Router, Request, Response } = require("express");
const connection = require("../../database");
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

  route.post("/set", (req, res) => {
    connection.query(`UPDATE spek_lietuva.category SET name = "${req.body.name}" WHERE category_id = ${req.body.id}`, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  })
};
