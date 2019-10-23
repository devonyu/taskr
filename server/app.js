const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

const docClient = new AWS.DynamoDB.DocumentClient();

app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  console.log("/ping route hit, returning pong");
  res.status(418).send("pong");
});

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
  // res.status(200).send("dynamooooooo");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("*", (req, res) => {
  console.log("catch all with *");
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
