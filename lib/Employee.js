const inquirer = require("inquirer");
// name, id, email
class Employee {
  constructor() {
    this.name = this.getName();
    this.id = this.getId();
    this.email = this.getEmail();
  }
  async getName() {
    inquirer
      .prompt({
        message: "Enter employee name:",
        type: "input",
        name: "name",
      })
      .then((answer) => {
        // console.log(answer);
        var name = answer.name;
        return name;
      });
  }
  getId() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Enter employee ID:",
        },
      ])
      .then((answer) => {
        var id = answer.id;
        return id;
      });
  }
  getEmail() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "Enter employee email:",
        },
      ])
      .then((answer) => {
        var email = answer.email;
        return email;
      });
  }
}

const employee = new Employee();
// employee.getName();
// employee.getId();
// employee.getEmail();

// console.log(employee);
