const { Router } = require("express");
//Require all routes here
const categories = require("./routes/categories");
const auth = require("./routes/auth");
const test = require("./routes/test");

module.exports = () => {
  const app = Router();
  // And include them in the export
  categories(app);
  auth(app);
  test(app);

  return app;
};
