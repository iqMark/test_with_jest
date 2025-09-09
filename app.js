// app.js

//*******************************************
//   comment out code below
/////////////////////////////////////////////
const express = require("express");
const app = express();

// middleware
app.use(express.json());
console.log("Express app initialized from =>> app.js");
// sample route
app.get("/", (req, res) => {
  res.status(200).send("Hello, Brave New World!");
});

module.exports = app;
//*******************************************
//n*/    // comment out code above