

//do I need a test for sents info from prompt to employee object??
test("creates Employee object", () => {
const employee = new Employee("Bob","1234","bob@aol.com")
  expect(employee.name()).toBe("Bob");
  expect(employee.id()).toBe("1234");
  expect(employee.email()).toBe("bob@aol.com");
});

test("exports Employee to use in role", () => {});


