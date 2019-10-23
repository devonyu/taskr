const AWS = require("aws-sdk");
const UUID = require("uuid");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8001"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Users";

/*
Example Task:
  {
    id: 'e29f01ce-ca0e-4ab1-8703-7ef078fe870a',
    starred: true,
    title: 'Example Task One',
    content: `<p>Here is an example</p>
    <p>We should have the app separated by authenticated and non-authenticated</p>
    <ol>
    <li>Create Auth and Unauth components</li>
    <li>useContext to set as a provider to determine if user is authenticated/logged in</li>
    <li>From top level in App.js, display authenticated or not based on this data</li>
    </ol>
    <p><strong>Once done, we can display either one with just a simple click for MVP</strong></p>
    <p>Let's add some tags and we will separate them by commas for MVP</p>`,
    progress: 2,
    priority: 3,
    startDate: 1562796120000,
    targetDate: 1564610520000,
    startDateUnix: 1562796120000,
    targetDateUnix: 1564610520000,
    tags: 'dev, example, mvp',
  }
*/

const email = "devon@taskr.online";
const id = UUID();
const title = "DynamoDB test";
const starred = true;
const progress = 1;
const priority = 1;
const startDate = 1562796120000;
const targetDate = 1564610520000;
const startDateUnix = 1562796120000;
const targetDateUnix = 1564610520000;
const tags = ["dynamodb", "example", "test"];
const content = `<p>dynamoDB EXAMPLE</p>
<p>here is a paragraph</p>
<ol>
<li>another one</li>
<li>aws is great</li>
</ol>
<p><strong>do we need graphql for this</strong></p>
<p>probably not</p>`;

const params = {
  TableName: table,
  Item: {
    email: email,
    taskID: id,
    task: {
      title: title,
      starred: starred,
      progress: progress,
      priority: priority,
      startDate: startDate,
      targetDate: targetDate,
      startDateUnix: startDateUnix,
      targetDateUnix: targetDateUnix,
      tags: tags,
      content: content
    }
  }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
