test("creates engineer extends Employee object", () => {
  const engineer = new Engineer("Bob", "1234", "bob@aol.com", "bobby");
  expect(engineer.name()).toBe("Bob");
  expect(engineer.id()).toBe("1234");
  expect(engineer.email()).toBe("bob@aol.com");
  expect(engineer.gitHubUser()).toBe("bobby");
});

test("exports Engineer to use in index", () => {});
