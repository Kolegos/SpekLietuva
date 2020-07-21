const { Router, Request, Response } = require("express");
const route = Router();

module.exports = () => {
  route.get("/categories/get", (req, res) => {
    connection.query(`SELECT * FROM spek_lietuva.category`, (err, results) => {
      if (err) throw err;
      //res.send("parejo rezultatai");
      res.json(results);
    });
  });
};
