const { Router } = require("express");
//Require all routes here
const categories = require("./routes/categories");

module.exports = () => {
  const app = Router();
  // And include them in the export
  categories();

  return app;
};
