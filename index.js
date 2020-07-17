require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database");
const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.get("/", (req, res) => res.send("Hello world!"));

app.get("/categories/get", (req, res) => {
  connection.query(`SELECT * FROM spek_lietuva.category`, (err, results) => {
    if (err) throw err;
    //res.send("parejo rezultatai");
    res.json(results);
  });
});

http.listen(port, () => {
  console.log(`listening on ${port}`);
});
