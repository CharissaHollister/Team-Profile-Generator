const inquirer = require("inquirer");
// name, id, email
const questions = [
  {
    message: "Enter employee name:",
    type: "input",
    name: "name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter employee ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee email:",
  },
];

class Employee {
  constructor() {}
  getName() {
    inquirer.prompt(questions).then((answer) => {
      console.log(answer);

    });
  }
}

const employee = new Employee();

// console.log(employee);
