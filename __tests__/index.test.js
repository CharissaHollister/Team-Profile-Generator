test("runs Manager as role for first entry", () => {
  getManagerObj();
  expect(managerSet[0]).toBe("manager");
});

test("Prompt for intern or engineer", () => {
  getNextEmployee();
});

test("run Intern as role", () => {
  getInternObj();
});

test("run Engineer as role", () => {
  getEngineerObj();
});

test("prompt for additional employees Y/N", () => {
  additionalEmployees();
});

test("send manager, intern, engineer arrays to generate page", () => {
  writeSite();
});

test("write content from generate page to HTML", () => {
  writeSite();
});

test("copy style page", () => {
  copyStyle();
});
