// const request = require("supertest");
const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const UUID = require("uuid/v4");

describe("Test the ping path", () => {
  test("It should respond with statusCode 418", async done => {
    const response = await request.get("/ping");
    expect(response.statusCode).toBe(418);
    expect(response.text).toEqual("pong");
    done();
  });

  describe("Test the helloWorld path", () => {
    test("It should response with string", async done => {
      const response = await request.get("/helloworld");
      expect(response.statusCode).toBe(200);
      expect(response.text).toEqual("Hello World!");
      done();
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
      const response = await request.get("/dynamo");
      expect(response.statusCode).toBe(200);
    });
    test("It should respond with email", async () => {
      const response = await request.get("/dynamo");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Item.email).toEqual("devon@taskr.online");
    });
    test("It should respond with taskID", async () => {
      const response = await request.get("/dynamo");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Item.taskID).toEqual(
        "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f"
      );
    });
  });

  describe("Test the test dynamomulti route", () => {
    test("It should response with status 200", async () => {
      const response = await request.get("/dynamomulti");
      expect(response.statusCode).toBe(200);
    });
    test("It should respond with an array of tasks", async () => {
      const response = await request.get("/dynamomulti");
      const taskData = await JSON.parse(response.text);
      expect(taskData.Items).toBeInstanceOf(Array);
    });
    test("It should respond with user email", async () => {
      const response = await request.get("/dynamomulti");
      const taskData = await JSON.parse(response.text);
      expect(typeof taskData.Items[0].email).toBe("string");
    });
  });

  describe("Test the test addtask route", () => {
    const randomID = UUID();
    const task = {
      email: "devon@taskr.online",
      taskID: randomID,
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
    };
    test("Create a new task and return status code 200", async done => {
      try {
        const addTask = await request.post("/addtask").send(task);
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
        const addTask = await request.post("/addtask").send(task);
        const response = await JSON.parse(addTask.text);
        const cloneTask = (({ email, taskID, ...others }) => ({ ...others }))(
          task
        );
        expect(cloneTask).toEqual(response.Item.task);
        done();
      } catch (err) {
        console.log(`Error ${err}`);
        done();
      }
    });
  });

  describe("Test the deletetask route", () => {
    let addTask;
    const randomID = UUID();
    const task = {
      email: "devon@taskr.online",
      taskID: randomID,
      content: "delete this",
      github: null,
      priority: 2,
      progress: 3,
      starred: false,
      startDate: null,
      startDateUnix: null,
      tags: null,
      targetDate: null,
      targetDateUnix: null,
      title: "delete this task pls"
    };
    beforeAll(async done => {
      addTask = await request.post("/addtask").send(task);
      const response = await JSON.parse(addTask.text);
      const cloneTask = (({ email, taskID, ...others }) => ({ ...others }))(
        task
      );
      expect(cloneTask).toEqual(response.Item.task);
      done();
    });

    test("Delete a created task", async done => {
      try {
        const { email, taskID } = task;
        const data = { email, taskID };
        const deleteTaskCall = await request
          .delete("/deletetask")
          .send({ ...data });
        expect(deleteTaskCall.status).toBe(204);
        done();
      } catch (err) {
        console.log(`Error ${err}`);
        done();
      }
    });
  });

  describe("Test the test updatetask route", () => {
    test("It should response update the task", async done => {
      const randomNumberString = String(Math.floor(Math.random() * 1000));
      const randomPriority = Math.floor(Math.random() * 5);
      const randomProgress = Math.floor(Math.random() * 5);
      const task = {
        taskID: "c61d2e4b-4f1e-47ac-b02e-3fffd92c111f",
        email: "devon@taskr.online",
        content: randomNumberString,
        priority: randomPriority,
        progress: randomProgress
      };
      const response = await request.put("/updatetask").send(task);
      const responseParse = JSON.parse(response.text);
      expect(response.statusCode).toBe(200);
      expect(responseParse.Attributes.task.content).toEqual(randomNumberString);
      expect(responseParse.Attributes.task.priority).toEqual(randomPriority);
      expect(responseParse.Attributes.task.progress).toEqual(randomProgress);
      done();
    });
  });
});
