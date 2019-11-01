const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const AWS = require("aws-sdk");
const UUID = require("uuid");
const bodyParser = require("body-parser");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  console.log("/ping route hit, returning pong");
  res.status(418).send("pong");
});

// get a single task via taskID
app.get("/dynamo", (req, res) => {
  console.log("/dynamo hit");
  const table = "Users";
  const email = "devon@taskr.online";
  const id = "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f";
  const params = {
    TableName: table,
    Key: {
      email: email,
      taskID: id
    }
  };
  docClient.get(params, function(err, data) {
    if (err) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      res.status(400).send(JSON.stringify(err, null, 2));
    } else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      res.status(200).send(JSON.stringify(data, null, 2));
    }
  });
});

// get all task from specific email
app.get("/dynamomulti", (req, res) => {
  console.log("/dynamomulti hit");
  const table = "Users";
  const email = "devon@taskr.online";
  var params = {
    TableName: "Users",
    KeyConditionExpression: "#em = :e",
    ExpressionAttributeNames: {
      "#em": "email"
    },
    ExpressionAttributeValues: {
      ":e": "devon@taskr.online"
    }
  };
  docClient.query(params, function(err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      res.status(400).send(JSON.stringify(err, null, 2));
    } else {
      console.log("Query succeeded.");
      res.status(200).send(data);
    }
  });
});

// add new task
app.post("/addtask", (req, res) => {
  console.log("/addtask hit");
  const id = UUID();
  const table = "Users";
  const email = "devon@taskr.online";
  console.log(req.body);
  console.log("////////////////");
  console.log(req.body.title);
  const params = {
    TableName: table,
    Item: {
      email: email,
      taskID: id,
      task: {
        title: req.body.title,
        starred: req.body.starred || false,
        progress: req.body.progress || 0,
        priority: req.body.priority || 0,
        startDate: req.body.startDate,
        targetDate: req.body.targetDate,
        startDateUnix: req.body.startDateUnix,
        targetDateUnix: req.body.targetDateUnix,
        tags: req.body.tags || null,
        content: req.body.content || null
      }
    }
  };
  console.log("Adding a new item...");
  docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
      res.status(200).send(JSON.stringify(data, null, 2));
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("*", (req, res) => {
  console.log("catch all with *");
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
