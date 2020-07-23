require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./database");
const app = express();
const routes = require("./api");
const auth0 = require("./auth0");

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
const port = process.env.PORT || 5000;
const http = require("http").createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes());
app.get("/", (req, res) => res.send("Hello world!"));

app.use(express.static("client/build"));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

http.listen(port, () => {
  console.log(`listening on ${port}`);
});
