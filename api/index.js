const { Router } = require("express");
//Require all routes here
const categories = require("./routes/categories");
const elements = require("./routes/elements");

module.exports = () => {
  const app = Router();
  // And include them in the export
  categories(app);
  elements(app);

  return app;
};
