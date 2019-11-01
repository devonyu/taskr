var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var email = "devon@taskr.online";
let id = "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f";

var params = {
  TableName: table,
  Key: {
    email: email,
    taskID: id
  }
};

docClient.get(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
