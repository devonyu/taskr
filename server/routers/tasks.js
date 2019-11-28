const express = require("express");
const docClient = require("../db/dynamodb");

const router = express.Router();

router.post("/tasks", async (req, res) => {
  const {
    email,
    taskID,
    content,
    github,
    priority,
    progress,
    starred,
    startDate,
    startDateUnix,
    targetDate,
    targetDateUnix,
    tags,
    title
  } = req.body;
  const table = "Users";
  const params = {
    TableName: table,
    Item: {
      email,
      taskID,
      task: {
        content: content || null,
        github: github || null,
        priority: priority || 0,
        progress: progress || 0,
        starred: starred || false,
        startDate: startDate || null,
        startDateUnix: startDateUnix || null,
        tags: tags || null,
        targetDate: targetDate || null,
        targetDateUnix: targetDateUnix || null,
        title: title || null
      }
    }
  };
  console.log("Adding a new item...");
  docClient.put(params, async (err, data) => {
    try {
      console.log("Added item succeeded:", JSON.stringify(data, null, 2));
      res.status(200).send(JSON.stringify(params, null, 2));
    } catch (error) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      res.status(400).send(error);
    }
  });
});

//? READ Tasks -- get tasks for user
router.get("/tasks", async (req, res) => {
  // console.log(req.headers);
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
    try {
      console.log("Query succeeded.");
      await res.status(200).send(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      res.status(500).send();
    }
  });
});

router.put("/tasks", async (req, res) => {
  const table = "Users";
  const {
    email,
    taskID,
    content,
    github,
    priority,
    progress,
    starred,
    startDate,
    startDateUnix,
    targetDate,
    targetDateUnix,
    tags,
    title
  } = req.body;
  const params = {
    TableName: table,
    Key: {
      email,
      taskID
    },
    UpdateExpression:
      "set task.content = :cont, task.github=:git, task.priority=:pri, task.progress = :pro, task.starred=:s, task.startDate=:sd, task.startDateUnix = :sdunix, task.targetDate=:td, task.targetDateUnix=:tdunix, task.tags=:tags, task.title=:title",
    ExpressionAttributeValues: {
      ":cont": content || null,
      ":git": github || null,
      ":pri": priority || 0,
      ":pro": progress || 0,
      ":s": starred || false,
      ":sd": startDate || null,
      ":sdunix": startDateUnix || null,
      ":td": targetDate || null,
      ":tdunix": targetDateUnix || null,
      ":tags": tags || null,
      ":title": title || null
    },
    ReturnValues: "UPDATED_NEW"
  };
  console.log("updating item...");
  docClient.update(params, async (err, data) => {
    try {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
      res.status(200).send(data);
    } catch (error) {
      console.error(
        "Unable to update item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      res.status(404).send(JSON.stringify(data, null, 2));
    }
  });
});

router.delete("/tasks", async (req, res) => {
  console.log("/deletetask hit");
  const { email, taskID } = req.body;
  const params = {
    TableName: "Users",
    Key: {
      email,
      taskID
    },
    ConditionExpression: "attribute_exists(taskID)"
  };
  docClient.delete(params, async (err, data) => {
    try {
      console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
      res.status(204).send(JSON.stringify("data", null, 2));
    } catch (error) {
      console.error(
        "Unable to delete item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      res.status(400).send(JSON.stringify(err, null, 2));
    }
  });
});

module.exports = router;
