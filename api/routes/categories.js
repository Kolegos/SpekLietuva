const { Router } = require("express");
const connection = require("../../database");
const checkJwt = require("../auth/checkJwt");
const checkRole = require("../auth/checkRole");
const route = Router();

module.exports = (app) => {
  app.use("/categories", route);

  route.get("/get", checkJwt, checkRole("admin"), (req, res) => {
    connection.query(`SELECT * FROM spek_lietuva.category`, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  route.post("/set", checkJwt, checkRole("admin"), (req, res) => {
    connection.query(
      `UPDATE spek_lietuva.category SET name = "${req.body.name}" WHERE category_id = ${req.body.id}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.post("/uploadElement", checkJwt, checkRole("admin"), (req, res) => {
    console.log(req.body);
    connection.query(
      `INSERT INTO spek_lietuva.element(name,image_link,latitude,longtitude,fk_category_id)VALUES('${req.body.name}','${req.body.image_link}','${req.body.latitude}','${req.body.longtitude}','${req.body.fk_category_id}')`,
      (err, results) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  });

  route.get("/getQuestions", (req, res) => {
    connection.query(
      `SELECT * FROM spek_lietuva.element WHERE fk_category_id=${req.query.categoryID}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.get("/getChoices", (req, res) => {
    connection.query(
      `SELECT name FROM spek_lietuva.element WHERE fk_category_id=${req.query.categoryID}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });
  
};
