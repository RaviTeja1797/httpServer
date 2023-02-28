const express = require("express");
expressInstance = express();

expressInstance.get("/", (request, response) => {
  response.send("Home Page");
});

expressInstance.get("/about", (request, response) => {
  response.send("About Page");
});

expressInstance.listen(3000);

module.exports = expressInstance;

