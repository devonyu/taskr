const express = require("express");
// const AWS = require("aws-sdk");

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

// const Task = require('../models/task')
// const auth = require('../middleware/auth')
const docClient = require("../db/dynamodb");

const router = express.Router();

//? CREATE new Task
// router.post("/tasks", auth, async (req, res) => {
//   const task = new Task({
//     ...req.body,
//     owner: req.user._id
//   });

//   try {
//     await task.save();
//     res.status(201).send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

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

// //? READ Task by ID
// router.get("/tasks/:id", auth, async (req, res) => {
//   try {
//     const task = await Task.findOne({
//       _id: req.params.id,
//       owner: req.user._id
//     });
//     //? only retrieve task if you're the owner
//     if (!task) return res.status(404).send();
//     res.send(task);
//   } catch (error) {
//     res.status(500).send();
//   }
// });

// //? UPDATE Task by ID
// router.patch("/tasks/:id", auth, async (req, res) => {
//   const requestedUpdates = Object.keys(req.body);
//   const allowedUpdates = ["description", "completed"];
//   const isValidOperation = requestedUpdates.every(updateProp =>
//     allowedUpdates.includes(updateProp)
//   );
//   if (!isValidOperation)
//     return res.status(400).send({ error: "Invalid update attempt" });

//   try {
//     const task = await Task.findOne({
//       _id: req.params.id,
//       owner: req.user._id
//     });
//     //? also search by 'owner' to verify authorization
//     if (!task) return res.status(404).send();

//     requestedUpdates.forEach(update => (task[update] = req.body[update]));
//     await task.save(); //? allows for middleware triggered by 'save()'

//     res.send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// //? DELETE Task by ID
// router.delete("/tasks/:id", auth, async (req, res) => {
//   try {
//     const task = await Task.findOneAndDelete({
//       _id: req.params.id,
//       owner: req.user._id
//     });
//     if (!task) return res.status(404).send();
//     res.send(task);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
