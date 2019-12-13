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

const signUpUser = async (email, name, password) => {
  const newUserID = await uuid();
  const hashedPassword = await bcrypt.hash(password, 10);
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
  let result = await docClient.put(params, async (err, data) => {
    try {
      const results = await data;
      return newUserID;
    } catch (err) {
      console.error(
        "Unable to signup user. Error:",
        JSON.stringify(err, null, 2)
      );
      throw err;
    }
  });
  return result.promise();
};

router.post("/users/signup", async (req, res) => {
  const { email, name, password } = await req.body;
  try {
    const user = await findUser(email);
    if (Object.keys(user).length > 0 && user.constructor === Object) {
      throw new Error("Email Already exist");
    }
    const userID = await signUpUser(email, name, password);
    const token = jwt.sign({ id: email }, "mysecret");
    res.status(200).json({ token, name, userID, email });
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
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
    const { name, userID } = user.Item;
    const token = jwt.sign({ id: email }, "mysecret");
    res.status(200).json({ token, email, name, userID });
  } catch (error) {
    console.error(error.message);
    res.send({ error: error.message });
  }
});

module.exports = router;
