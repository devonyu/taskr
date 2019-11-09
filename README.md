# TaskR

[![Netlify Status](https://api.netlify.com/api/v1/badges/20f20b87-6101-412c-817c-c678cdfba23c/deploy-status)](https://app.netlify.com/sites/wizardly-lichterman-28d465/deploys)
[![Coverage Status](https://coveralls.io/repos/github/devonyu/taskr/badge.svg?branch=master)](https://coveralls.io/github/devonyu/taskr?branch=master)
[![Build Status](https://travis-ci.org/devonyu/taskr.svg?branch=master)](https://travis-ci.org/devonyu/taskr)

> Tasking application for developers

A task manager that helps an individual create meaningful tasks to help organize their workflows. Utilizes a Markdown editor to help create a
better UX for the user, along with key data points to help organize tasks

## Usage example

A developer is in need to organize specific tasks to help with workload management and prioritizing specific features and business logic.
A user can create tasks and assign specific attributes to said task in order to help them with their workflow

> Example Cases:
>
> - Given a specific business need, a feature or bug fix may be required by next week, a user can create tasks and assign a target date with a specific priority.
> - While working on a feature, small bugs are found during the development phase and to document them, a user can create new tasks with low priorities to be fixed at a later time.
> - The next day, a pull request goes through the automated testing suite and a major bug is found. User will create a high priority task and focus on said major bug for a hotfix
> - While sorting the tasks by priority and progress, a user can work and maintain focus on urgent tasks

## Flowchart

1. The user signs up for an account.
2. Users can begin creating tasks and will be persisted within our AWS Dynamodb Database.
3. The Tasklist view can be customized by sorting, filtering, and dragging columns for a custom UX
4. Tasks can be updated and archived when completed

## Developer Setup

### Base setup

- Clone the master repo
- run `npm install` in root taskR folder
- cd to server, and run `npm install`
- cd back to client and run `npm install`

### AWS setup Local

- Signup for an AWS account and create a DynamoDB Table
- Table name = `Users`, Primary partition key= `email`, Primary sort key = `taskID`. Note your ARN to know where your DB can be connected to. It is also advised that you set up the AWS CLI and set your credentials locally
- update your Config within `app.js` and set the endpoint to where your local DynamoDB is running => `AWS.config.update({ region: "us-west-1" endpoint: "http://localhost:8001" });`
- more information on local dev with DynamoDB [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
- start the local dynamodb by going into terminal and cd to `dynamodb_local_latest` and run `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb -port 8001`

### DevOps setup

- Make sure to copy your Coveralls, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY to your Travis CI Settings to ensure it will pass tests while building

### Etc setup

- create a `.env` file within client folder and add your React TinyMCE API key

### AWS Deployment

- Sign in to AWS Console and create an EC2 instance (Free tier includes the`t2.micro`)

- Edit your security group in include inbound traffic from ports `80(Main), 22(SSH), 5000(Node), 3000(React), 443(HTTPS)`

- SSH into your instance and `git clone` your fork. IE: `ssh -i /Users/name/locationofcredentials/ec2free.pem ec2-user@ec2-ipaddress.us-west-1.compute.amazonaws.com`

- Install all node modules with `npm install`, build a production version of the react folder with `npm run build` in the client folder (Warning -< I've experienced multiple times of node running out of memory while building -> I'd suggest using a larger instance or you can try to add `--max_old_space_size=1024` after `npm run build` to help limit memory usage)

- cd to root and run `npm run production` which will start PM2 and serve indefinitely the Express server.

- I suggest routing your `port 80` to `port 5000` so a user won't need to specific their port when connecting to your app. You can do this by running `sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 5000`

- If you have a custom domain you'd like to add, you can add your elastic IP and change the DNS name servers.

## Current UI

- As of November 7 - current TaskList and SingleTask views example
  ![NovUI](https://github.com/devonyu/taskr/blob/master/images/nov7taskr.jpg)

## Schema Design

![Schema](https://github.com/devonyu/taskr/blob/master/images/taskrschema.jpg)

## Tech Stack:

- JavaScript ES6 - Main Programming language for application
- React - JS Libary for UI
- NodeJS + Express - Server and Framework to serve requests
- AWS EC2 - Cloud-Based Instance to run the application
- AWS DynamoDB - NoSQL Cloud-Based Database persisting application data
- Material UI - Styling Framework for consistent system styling
- Travis CI - Continuous Integrations and Deliveries on Pull Requests and Master Branch Merges
- Coveralls - Code coverage reporting
- Jest - General Testing
- Flow - Typeschecking code

### Currently Implemented:

- Basic Jest Test (6/20)
- Travis CI and Coveralls integration for CI/CD and Test Coverage analysis (6/20)
- MVP Schema
- TaskList View using Material Table
- SingleTask View to display a single task's data
- TinyMCE implementation for markdown for task content
- AWS Dynamodb set up and connected
- AWS EC2 instance with persistent IP to serve the application
- NameServers and DNS mapped to EC2 Instance

### Changed features:

- Deploy Client to Netlify and connect domain nameHTTPS/DNS/Nameservers changed (6/20) -> required a backend so transitioned to utilizing the AWS ecosystem
- Homepage - redesign planned
- SignupModal - redesign planned

### Planned:

#### Prior to 11/8

- Login page
- About section
- Footer
- React Router
- Task List Component
- Task Component
- View Task by Starred, folders, all tasks
- Mock data to DB to test
- Bcrypt Passwords
- NodeJS + Express setup
- GraphQL + Apollo Client setup
- MongoDB + Mongoose setup
- App Workflow
- Unit Testing With Jest
- CI with Travis CI
- Dockerize with Docker
- Persistent logins with sessions or tokens
- HTTPS setup
- Deploy to public

#### As of 11/8

- Signup and Login flow
- Redis to store sessions
- Ability to Archive tasks
- Create a modern Homepage
- Ability to upload images to AWS S3 bucket
- HTTPS Setup with Nginx and Let's Encrypt
- Increase Type checking for Flow
- Increase Test coverage for Front and Backend
- Integrate E2E and Integration testing
- Scheduled Deployments on Sucsessfull Master Builds
- Automated Scheduled start/stop for the EC2 instance to limit budget -> Preferably (9 AM-5 PM PST).

#### Future Goals

- Team-based tasks with multiple owners
- Email invite to join a Team
- Folders for tasks

## Social Media

- [TaskR](http://www.taskr.online)

## Contact Information

> Devon Yu

- [devonyu415@gmail.com](mailto:devonyu415@gmail.com?subject=Hello)
- [Twitter](https://twitter.com/devonyu_)
- [Github](https://github.com/devonyu/)
- [LinkedIn](https://linkedin.com/in/devonyu)
- [Facebook](https://facebook.com/devonyu)
- [Instagram](https://instagram.com/devonyu)

## Contributing

1. Check out the Issues tab and if there is anything that you could help out with, Feel free to send a pull request :)
2. If there are any suggestions and/or bugs that you notice, please submit it as well! Thanks!
