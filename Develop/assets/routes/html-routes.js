// // Dependencies
// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// // Sets up Express App
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Express Handles Data Parsing
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../../public/notes.html"));
// });

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../../public/index.html"));
// });