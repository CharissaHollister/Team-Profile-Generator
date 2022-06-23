test("creates intern extends Employee object", () => {
  const intern = new Intern("Bob", "1234", "bob@aol.com", "bobby");
  expect(intern.name()).toBe("Bob");
  expect(intern.id()).toBe("1234");
  expect(intern.email()).toBe("bob@aol.com");
  expect(intern.gitHubUser()).toBe("bobby");
});

test("exports Intern to use in index", () => {});
