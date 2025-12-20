it("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("https://mendoncadog.com.br");

  expect(response.status).toBe(200);
});
