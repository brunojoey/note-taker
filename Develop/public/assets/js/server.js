// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Express Handles Data Parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());