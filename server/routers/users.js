const express = require("express");
const docClient = require("../db/dynamodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");

const router = express.Router();

const findUser = async email => {
  var params = {
    TableName: "User",
    Key: {
      email: email
    }
  };
  let result = await docClient.get(params, async (err, data) => {
    try {
      const results = await data;
      return results;
    } catch (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      throw err;
    }
  });
  return result.promise();
};

router.post("/users/signup", async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserID = uuid();
  const table = "User";
  const params = {
    TableName: table,
    Item: {
      userID: newUserID,
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
      res.status(200).send({ token, password: null, newUserID });
    } catch (error) {
      console.error(
        "Unable to add item. Error JSON:",
        JSON.stringify(error, null, 2)
      );
      res.status(400).send(error);
    }
  });
});

router.post("/users/login", async (req, res) => {
  const { email, password } = await req.body;
  try {
    const user = await findUser(email);
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      throw new Error("Email does not exist");
    }
    const passwordIsValid = await bcrypt.compareSync(
      password,
      user.Item.password
    );
    if (!passwordIsValid) throw new Error("Password incorrect");

    const token = jwt.sign({ id: email }, "mysecret");
    res.status(200).json({ token, password: null, ...user });
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
});

module.exports = router;
