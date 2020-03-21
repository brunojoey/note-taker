// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requires the DB Json file
const dbFile = require("./db/db.json");

// Sets static app to the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Handles Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Returns the dbFile data.
app.get("/api/notes", function (req, res) {
    res.json(dbFile);
});

// Posts a new note to the dbFile.
app.post("/api/notes", function (req, res) {
    dbFile.push(req.body);
    res.json("It has worked!");
});

// Deletes from the api/notes/ path the id and splices each one that goes through the for loop that matches it's own id.
app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    console.log(req.params.id);

    for (var i = 0; i < dbFile.length; i++) {
        if (id === dbFile[i].id) {
          dbFile.splice(i);
        };
      };
      res.json(dbFile);
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
