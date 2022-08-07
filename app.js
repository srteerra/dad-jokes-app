// Express
const express = require("express");
const path = require("path");

// INITIALIZING
const app = express();
app.set("port", 8080);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// RUN SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT: ", app.get("port"));
});
