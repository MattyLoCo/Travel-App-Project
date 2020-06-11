const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);

it("Successfully fetches the /test endpoint", async (done) => {
  // Sends GET Request to /test endpoint
  const response = await request.get("/test");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
  done();
});
