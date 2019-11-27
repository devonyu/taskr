const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");
const AWS = require("aws-sdk");
const UUID = require("uuid/v4");
const bodyParser = require("body-parser");

//? IMPORT ROUTES
// const usersRouter = require("./routers/users");
const tasksRouter = require("./routers/tasks");
const testsRouter = require("./routers/tests");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if (process.env && process.env.NODE_ENV !== "production") {
//   const dotenv = require("dotenv");
//   dotenv.config();
// }

// AWS.config.update({
//   region: "us-west-1"
// });

// if (process.env && process.env.NODE_ENV === "development") {
//   AWS.config.update({
//     endpoint: "http://localhost:8001"
//   });
// }

// console.log("Region: ", AWS.config.region);
// console.log("Current Process ENV:");
// console.log(process.env.NODE_ENV);

// AWS.config.getCredentials(err => {
//   if (err) console.log(err.stack);
//   else {
//     console.log("AWS credentials correctly loaded");
//   }
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

//* ROUTES
// app.use(usersRouter); // /users
app.use(tasksRouter); // /tasks
app.use(testsRouter); // /tests

// // add new task
// app.post("/addtask", (req, res) => {
//   console.log("/addtask hit!");
//   const {
//     email,
//     taskID,
//     content,
//     github,
//     priority,
//     progress,
//     starred,
//     startDate,
//     startDateUnix,
//     targetDate,
//     targetDateUnix,
//     tags,
//     title
//   } = req.body;
//   const table = "Users";
//   const params = {
//     TableName: table,
//     Item: {
//       email,
//       taskID,
//       task: {
//         content: content || null,
//         github: github || null,
//         priority: priority || 0,
//         progress: progress || 0,
//         starred: starred || false,
//         startDate: startDate || null,
//         startDateUnix: startDateUnix || null,
//         tags: tags || null,
//         targetDate: targetDate || null,
//         targetDateUnix: targetDateUnix || null,
//         title: title || null
//       }
//     }
//   };
//   console.log("Adding a new item...");
//   docClient.put(params, (err, data) => {
//     if (err) {
//       console.error(
//         "Unable to add item. Error JSON:",
//         JSON.stringify(err, null, 2)
//       );
//     } else {
//       console.log("Added item succeeded:", JSON.stringify(data, null, 2));
//       res.status(200).send(JSON.stringify(params, null, 2));
//     }
//   });
// });

// // update task
// app.put("/updatetask", (req, res) => {
//   const table = "Users";
//   const {
//     email,
//     taskID,
//     content,
//     github,
//     priority,
//     progress,
//     starred,
//     startDate,
//     startDateUnix,
//     targetDate,
//     targetDateUnix,
//     tags,
//     title
//   } = req.body;
//   const params = {
//     TableName: table,
//     Key: {
//       email,
//       taskID
//     },
//     UpdateExpression:
//       "set task.content = :cont, task.github=:git, task.priority=:pri, task.progress = :pro, task.starred=:s, task.startDate=:sd, task.startDateUnix = :sdunix, task.targetDate=:td, task.targetDateUnix=:tdunix, task.tags=:tags, task.title=:title",
//     ExpressionAttributeValues: {
//       ":cont": content || null,
//       ":git": github || null,
//       ":pri": priority || 0,
//       ":pro": progress || 0,
//       ":s": starred || false,
//       ":sd": startDate || null,
//       ":sdunix": startDateUnix || null,
//       ":td": targetDate || null,
//       ":tdunix": targetDateUnix || null,
//       ":tags": tags || null,
//       ":title": title || null
//     },
//     ReturnValues: "UPDATED_NEW"
//   };
//   console.log("updating item...");
//   docClient.update(params, (err, data) => {
//     if (err) {
//       console.error(
//         "Unable to update item. Error JSON:",
//         JSON.stringify(err, null, 2)
//       );
//       res.status(404).send(JSON.stringify(data, null, 2));
//     } else {
//       console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
//       res.status(200).send(data);
//     }
//   });
// });

// app.delete("/deletetask", (req, res) => {
//   console.log("/deletetask hit");
//   const { email, taskID } = req.body;
//   const params = {
//     TableName: "Users",
//     Key: {
//       email,
//       taskID
//     },
//     ConditionExpression: "attribute_exists(taskID)"
//   };
//   docClient.delete(params, (err, data) => {
//     if (err) {
//       console.error(
//         "Unable to delete item. Error JSON:",
//         JSON.stringify(err, null, 2)
//       );
//       res.status(400).send(JSON.stringify(err, null, 2));
//     } else {
//       console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
//       res.status(204).send(JSON.stringify("data", null, 2));
//     }
//   });
// });

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
