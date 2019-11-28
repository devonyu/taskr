const express = require("express");
const docClient = require("../db/dynamodb");

const router = express.Router();

router.get("/helloworld", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/ping", (req, res) => {
  console.log("/ping route hit, returning pong");
  res.status(418).send("pong");
});

router.get("/dynamo", async (req, res) => {
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
    try {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
      await res.status(200).send(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(
        "Unable to read item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      await res.status(400).send(JSON.stringify(error, null, 2));
    }
  });
});

module.exports = router;
