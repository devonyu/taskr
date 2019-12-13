var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for users for email devon@taskr.online");

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

docClient.query(params, function(err, data) {
  if (err) {
    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
  } else {
    console.log("Query succeeded.");
    data.Items.forEach(function(item) {
      console.log(" -", item.email + ": " + item.taskID);
      console.log(`title: ${item.task.title}`);
      console.log(`starred: ${item.task.starred}`);
      console.log(`progress: ${item.task.progress}`);
      console.log(`priority: ${item.task.priority}`);
      console.log(`startDate: ${item.task.startDate}`);
      console.log(`targetDate: ${item.task.targetDate}`);
      console.log(`startDateUnix: ${item.task.startDateUnix}`);
      console.log(`targetDateUnix: ${item.task.targetDateUnix}`);
      console.log(`tags: ${item.task.tags}`);
      console.log(`content: ${item.task.content}`);
    });
  }
});
