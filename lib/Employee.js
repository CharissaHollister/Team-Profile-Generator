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
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getInfo() {
    return inquirer.prompt(questions);
  }
}

module.exports = Employee;
// const employee = new EmployeeCopy();
// employee;
// console.log(employee);
