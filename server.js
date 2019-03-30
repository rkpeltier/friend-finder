var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

