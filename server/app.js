const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");
const AWS = require("aws-sdk");
const UUID = require("uuid");
const bodyParser = require("body-parser");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env && process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

AWS.config.update({
  region: "us-west-1"
});

if (process.env && process.env.NODE_ENV === "development") {
  AWS.config.update({
    endpoint: "http://localhost:8001"
  });
}

console.log("Region: ", AWS.config.region);
console.log("Current Process ENV:");
console.log(process.env.NODE_ENV);

AWS.config.getCredentials(err => {
  if (err) console.log(err.stack);
  else {
    console.log("AWS credentials correctly loaded");
  }
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.get("/ping", (req, res) => {
  console.log("/ping route hit, returning pong");
  res.status(418).send("pong");
});

// test route for dynamodb
app.get("/dynamo", (req, res) => {
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
  docClient.get(params, async (err, data) => {
    if (err) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      await res.status(400).send(JSON.stringify(err, null, 2));
    } else {
      // console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      await res.status(200).send(JSON.stringify(data, null, 2));
    }
  });
});

// get all task from specific email
app.get("/dynamomulti", async (req, res) => {
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
  docClient.query(params, async (err, data) => {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      await res.status(400).send(JSON.stringify(err, null, 2));
    } else {
      console.log("Query succeeded.");
      await res.status(200).send(JSON.stringify(data, null, 2));
    }
  });
});

// add new task
app.post("/addtask", async (req, res) => {
  console.log("/addtask hit!");
  const { task, taskID, email } = await req.body.Item;
  // const { taskID } = await req.body.Item;
  const table = "Users";
  // const { email } = await req.body.Item;
  const params = {
    TableName: table,
    Item: {
      email,
      taskID,
      task: {
        content: task.content || null,
        github: task.github || null,
        priority: task.priority || 0,
        progress: task.progress || 0,
        starred: task.starred || false,
        startDate: task.startDate || null,
        startDateUnix: task.startDateUnix || null,
        tags: task.tags || null,
        targetDate: task.targetDate || null,
        targetDateUnix: task.targetDateUnix || null,
        title: task.title || null
      }
    }
  };
  // console.log("Adding a new item...");
  docClient.put(params, async (err, data) => {
    if (err) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      // console.log("Added item:", JSON.stringify(params, null, 2));
      await res.status(200).send(JSON.stringify(params, null, 2));
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
      ":tdunix": req.body.targetDateUnix || null,
      ":tags": req.body.tags || null,
      ":title": req.body.title || null
    },
    ReturnValues: "UPDATED_NEW"
  };
  console.log("updating item...");
  docClient.update(params, (err, data) => {
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

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  console.log("is this production?");
  console.log(process.env.NODE_ENV);
  app.use(express.static(path.join(__dirname, "/../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
  });
}

app.get("/helloworld", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "/../client/build")));
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

app.get("*", (req, res) => {
  app.use(express.static(path.join(__dirname, "/../client/build")));
  res.sendFile(path.join(__dirname, "/../client/build", "index.html"));
});

module.exports = app;
