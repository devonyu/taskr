const request = require("supertest");
const app = require("../app");

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

  describe("Test the root path", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
  });

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
});
