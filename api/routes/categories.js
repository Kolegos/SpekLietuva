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
    connection.query(
      `UPDATE spek_lietuva.category SET name = "${req.body.name}" WHERE category_id = ${req.body.id}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.post("/uploadElement", (req, res) => {
    console.log(req.body);
    connection.query(
      `INSERT INTO spek_lietuva.element(name,image_link,latitude,longtitude,fk_category_id)VALUES('${req.body.name}','${req.body.image_link}','${req.body.latitude}','${req.body.longtitude}','${req.body.fk_category_id}')`,
      (err, results) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  });
};
