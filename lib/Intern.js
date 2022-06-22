const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.schoolName = schoolName;
  }
  getInternInfo = function () {
    inquirer
      .prompt({
        type: "input",
        name: "school",
        message: "Enter School Name:",
      })
      .then((answer) => {
        this.getInfo().then((info) => {
          this.name = info.name;
          this.id = info.id;
          this.email = info.email;
          this.schoolName = answer.schoolName;
        });
      });
  };
}

module.exports = Intern;
