// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requires the DB Json file
const dbFile = require("./Develop/db/db.json");

// Sets static app to the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Handles Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function (req, res) {
    fs.readFile(dbFile, "utf8", function (err, data) {
        if (err) {
            console.log("Something terrible occurred...");
        } else {
            res.json(dbFile);
        };
    });
});

// POST `/api/notes` - Should receive a new note to save on the request body, 
// add it to the `db.json` file
// then return the new note to the client.
app.post("/api/notes", function (req, res) {
    dbFile.push(req.body);
    res.json("Something wonderful has occurred...!");
});


// DELETE `/api/notes/:id` - 
// Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, you'll need to read all notes from the `db.json` file, 
// remove the note with the given `id` property
// then rewrite the notes to the `db.json` file.
app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;

    for (var i = 0; i < dbFile.length; i++) {
        if (id === dbFile[i].id) {
          dbFile.splice(i, 1);
        }
      };
      res.json(dbFile);
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


