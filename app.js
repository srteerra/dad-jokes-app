require("dotenv").config();

// Express
const express = require("express");
const path = require("path");

// INITIALIZING
const app = express();

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// RUN SERVER
app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log("Server is running...");
});
