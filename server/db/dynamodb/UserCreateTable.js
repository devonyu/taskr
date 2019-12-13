var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "User",
  KeySchema: [
    { AttributeName: "email", KeyType: "HASH" } //Partition key
  ],
  AttributeDefinitions: [{ AttributeName: "email", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to create USER table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created USER table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
