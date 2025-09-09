// tests/app.test.js
/*//
const request = require("supertest");
const app = require("../app"); // your Express app

describe("API Tests", () => {
  it("should return 200 for GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
*/
// tests/app.test.js
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return Hello, world! with status 200", async () => {
    const res = await request(app).get("/");
    
    // expect(res.statusCode).toBe(200);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello, Brave New World!");
  });
});

