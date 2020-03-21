// // Dependencies
// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// // Requires the DB Json file
// const dbFile = require("../../db/db.json");

// // Sets up Express App
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Express Handles Data Parsing
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());


// // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
// app.get("/api/notes", function(req, res) {
//     fs.readFile(dbFile, "utf8", function(err, data) {
//         if(err) {
//             console.log("Something terrible occured...");
//         } else {
//             res.json(data);
//         };
//     });
// });

// // POST `/api/notes` - Should receive a new note to save on the request body, 
// // add it to the `db.json` file
// // then return the new note to the client.
// app.post("/api/notes", function(req, res) {
//     const newNote = req.body;
//     newNote.id = newNote.title.replace(/\s+/g, "");
//     console.log(newNote);
// });