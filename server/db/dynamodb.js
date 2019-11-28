const AWS = require("aws-sdk");

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

module.exports = docClient;
