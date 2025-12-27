it("GET to /api/v1/status should return 200 on prod", async () => {
  const response = await fetch("https://mendoncadog.com.br");

  expect(response.status).toBe(200);
});

it("GET to /api/v1/status should return 200 on dev", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  if (process.env.NODE_ENV === "development") {
    expect(responseBody.dependencies.database.version).toEqual("16.0");
    expect(responseBody.dependencies.database.max_connections).toEqual(100);
  } else {
    expect(responseBody.dependencies.database.max_connections).toEqual(901);
    expect(responseBody.dependencies.database.version).toEqual(
      "16.11 (74c6bb6)",
    );
  }

  expect(responseBody.dependencies.database.open_connections).toEqual(1);
});
