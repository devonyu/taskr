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
