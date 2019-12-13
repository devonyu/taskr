var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var email = "devon@taskr.online";
var id = "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f";

// Update the item, unconditionally,

var params = {
  TableName: table,
  Key: {
    email: email,
    taskID: id
  },
  UpdateExpression: "set task.starred = :s, task.title=:t, task.priority=:p",
  ExpressionAttributeValues: {
    ":s": false,
    ":p": 4,
    ":t": "A new title"
  },
  ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
