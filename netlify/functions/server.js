// netlify/functions/server.js
const serverless = require("serverless-http");
const express = require("express");
const path = require("path");
const app = express();
const events = require("../../routes/events");
const teams = require("../../routes/teams");
require("dotenv").config();

// Middleware
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.urlencoded({ extended: true }));
app.use("/events", events);
app.use("/teams", teams);

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/suggestion", (req, res) => {
  res.render("suggestion");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/popular", (req, res) => {
  res.render("popular-guests");
});

app.get("/pic", (req, res) => {
  res.render("pic");
});

app.get("/apply_guest", (req, res) => {
  res.render("apply_guest");
});

// Export the app as a serverless function
module.exports.handler = serverless(app);
