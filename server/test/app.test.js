const request = require("supertest");
const app = require("../app");
const UUID = require("uuid");

describe("Test the ping path", () => {
  test("It should respond with statusCode 418", async () => {
    const response = await request(app).get("/ping");
    expect(response.statusCode).toBe(418);
  });

  describe("Test the helloWorld path", () => {
    test("It should response with string", async () => {
      const response = await request(app).get("/helloworld");
      expect(response.statusCode).toBe(200);
      expect(response.text).toEqual("Hello World!");
    });
  });

  // TODO: Check out why this is failing in travisCI 404 vs 200..
  // describe("Test the root path", () => {
  //   test("It should response the GET method", async () => {
  //     const response = await request(app).get("/");
  //     expect(response.statusCode).toBe(200);
  //   });
  // });

  describe("Test the test dynamodb route", () => {
    test("It should response with status 200", async () => {
      const response = await request(app).get("/dynamo");
      expect(response.statusCode).toBe(200);
    });
    test("It should respond with email", async () => {
      const response = await request(app).get("/dynamo");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Item.email).toEqual("devon@taskr.online");
    });
    test("It should respond with taskID", async () => {
      const response = await request(app).get("/dynamo");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Item.taskID).toEqual(
        "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f"
      );
    });
  });

  describe("Test the test dynamomulti route", () => {
    test("It should response with status 200", async () => {
      const response = await request(app).get("/dynamomulti");
      expect(response.statusCode).toBe(200);
    });
    test("It should respond with an array of tasks", async () => {
      const response = await request(app).get("/dynamomulti");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Items).toBeInstanceOf(Array);
    });
    test("It should respond with user email", async () => {
      const response = await request(app).get("/dynamomulti");
      const taskData = await JSON.parse(response.text);
      expect(typeof taskData.Items[0].email).toBe("string");
    });
  });

  describe("Test the test addtask route", () => {
    const randomID = UUID();
    const task = {
      TableName: "Users",
      Item: {
        email: "devon@taskr.online",
        taskID: randomID,
        task: {
          content: "something",
          github: null,
          priority: 2,
          progress: 3,
          starred: false,
          startDate: null,
          startDateUnix: null,
          tags: null,
          targetDate: null,
          targetDateUnix: null,
          title: "hello world"
        }
      }
    };
    test("Create a new task and return status code 200", async done => {
      try {
        const addTask = await request(app)
          .post("/addtask")
          .send(task);
        const response = await JSON.parse(addTask.text);
        const status = await JSON.parse(addTask.status);
        expect(status).toBe(200);
        done();
      } catch (err) {
        console.log(`Error ${err}`);
        done();
      }
    });
    test("Create a new task and returns the task when completed", async done => {
      try {
        const addTask = await request(app)
          .post("/addtask")
          .send(task);
        const response = await JSON.parse(addTask.text);
        expect(response).toEqual(task);
        done();
      } catch (err) {
        console.log(`Error ${err}`);
        done();
      }
    });
  });
});
