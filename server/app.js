const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const AWS = require("aws-sdk");
const UUID = require("uuid/v4");
const bodyParser = require("body-parser");

//? IMPORT ROUTES
// const usersRouter = require("./routers/users");
const tasksRouter = require("./routers/tasks");
const testsRouter = require("./routers/tests");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* ROUTES
// app.use(usersRouter); // /users
app.use(tasksRouter); // /tasks
app.use(testsRouter); // /tests

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   console.log("is this production?");
//   console.log(process.env.NODE_ENV);
//   app.use(express.static(path.join(__dirname, "/../client/build")));
//   // Handle React routing, return all requests to React app
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
//   });
// }

// LOAD UNAUTHENTICATED APPS
app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "/../client/build")));
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

app.get("*", (req, res) => {
  app.use(express.static(path.join(__dirname, "/../client/build")));
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

// ERROR HANDLING
app.use((req, res, next) => {
  res.status(404).send({ error: "Not Found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
