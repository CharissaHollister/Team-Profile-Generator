const inquirer = require("inquirer");
// name, id, email
class Employee {
  constructor() {
    this.name = this.getName();
    this.id = this.getId();
    this.email = this.getEmail();
  }
  async getName() {
    await inquirer
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
  async getId() {
    await inquirer
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
  async getEmail() {
    await inquirer
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
