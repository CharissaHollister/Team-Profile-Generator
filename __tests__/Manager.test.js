test("creates manager extends Employee object", () => {
  const manager = new Manager("Bob", "1234", "bob@aol.com", "bobby");
  expect(manager.name()).toBe("Bob");
  expect(manager.id()).toBe("1234");
  expect(manager.email()).toBe("bob@aol.com");
  expect(manager.gitHubUser()).toBe("bobby");
});

test("exports Manager to use in index", () => {});
