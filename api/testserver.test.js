const request = require("supertest");
const app = require("./index.js");
const jwt = require("jsonwebtoken");

const secretKeys = "your_secret_key";

describe("GET /login", () => {
  test("should return a JWT token", async () => {
    const res = await request(app).get("/login").expect(200);
    console.log(res.text);
    const json = res.text
    const obj = JSON.parse(json)
    const token = obj.token
    const decoded = jwt.verify(token, secretKeys);
    expect(decoded.id).toBe(123);
  });
});

test("Querry", async () => {
    const response = await request(app).get("/equations");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("[{\"id\":1,\"equation\":\"(x^4)-13\",\"xl\":1,\"xr\":2},{\"id\":5,\"equation\":\"(x^1)-13\",\"xl\":1,\"xr\":10},{\"id\":6,\"equation\":\"(x^2)-11\",\"xl\":4,\"xr\":5},{\"id\":7,\"equation\":\"(x^2)\",\"xl\":0,\"xr\":9},{\"id\":8,\"equation\":\"(x^3)\",\"xl\":0,\"xr\":9},{\"id\":9,\"equation\":\"1/4x-2x\",\"xl\":0,\"xr\":9},{\"id\":20,\"equation\":\"x^2/4\",\"xl\":2,\"xr\":8},{\"id\":21,\"equation\":\"x^2/4-1\",\"xl\":3,\"xr\":10},{\"id\":22,\"equation\":\"(x^1)-10\",\"xl\":2,\"xr\":6}]");
  });