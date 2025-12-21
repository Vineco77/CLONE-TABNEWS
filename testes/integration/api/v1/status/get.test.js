it("GET to /api/v1/status should return 200 on prod", async () => {
  const response = await fetch("https://mendoncadog.com.br");

  expect(response.status).toBe(200);
});

it("GET to /api/v1/status should return 200 on dev", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});
