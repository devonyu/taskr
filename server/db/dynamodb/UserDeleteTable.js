var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "User"
};

dynamodb.deleteTable(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to DELETE USER table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "DELETED USER table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
