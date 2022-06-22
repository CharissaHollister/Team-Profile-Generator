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

class EmployeeCopy {
  constructor() {}
  getInfo() {
    inquirer.prompt(questions).then((answer) => {
      console.log(answer);
    });
  }
}

module.exports = EmployeeCopy;
// const employee = new EmployeeCopy();
// employee;
// console.log(employee);
