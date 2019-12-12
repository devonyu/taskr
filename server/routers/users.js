const express = require("express");
const docClient = require("../db/dynamodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/users/signup", async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const table = "Users";
  const params = {
    TableName: table,
    Item: {
      email,
      name,
      password: hashedPassword
    }
  };
  console.log("Adding creating new user..");
  docClient.put(params, async (err, data) => {
    try {
      const token = jwt.sign({ id: email }, "mysecret");
      console.log("Added item succeeded:", JSON.stringify(data, null, 2));
      res.status(200).send({ token, password: null });
    } catch (error) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      res.status(400).send(error);
    }
  });
});

module.exports = router;
