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
  const id = UUID();
  const table = "Users";
  const email = "devon@taskr.online";
  const params = {
    TableName: table,
    Item: {
      email: email,
      taskID: id,
      task: {
        content: req.body.content || null,
        github: req.body.github || null,
        priority: req.body.priority || 0,
        progress: req.body.progress || 0,
        starred: req.body.starred || false,
        startDate: req.body.startDate,
        startDateUnix: req.body.startDateUnix,
        tags: req.body.tags || null,
        targetDate: req.body.targetDate,
        targetDateUnix: req.body.targetDateUnix,
        title: req.body.title
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

// update task
app.put("/updatetask", (req, res) => {
  const table = "Users";
  const params = {
    TableName: table,
    Key: {
      email: req.body.email,
      taskID: req.body.taskID
    },
    UpdateExpression:
      "set task.content = :cont, task.github=:git, task.priority=:pri, task.progress = :pro, task.starred=:s, task.startDate=:sd, task.startDateUnix = :sdunix, task.targetDate=:td, task.targetDateUnix=:tdunix, task.tags=:tags, task.title=:title",
    ExpressionAttributeValues: {
      ":cont": req.body.content || null,
      ":git": req.body.github || null,
      ":pri": req.body.priority || 0,
      ":pro": req.body.progress || 0,
      ":s": req.body.starred || false,
      ":sd": req.body.startDate || null,
      ":sdunix": req.body.startDateUnix || null,
      ":td": req.body.targetDate || null,
      ":tdunix": req.body.targetDateUnix,
      ":tags": req.body.tags || null,
      ":title": req.body.title || null
    },
    ReturnValues: "UPDATED_NEW"
  };
  console.log("updating item...");
  docClient.update(params, function(err, data) {
    if (err) {
      console.error(
        "Unable to update item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      res.status(404).send(JSON.stringify(data, null, 2));
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
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
