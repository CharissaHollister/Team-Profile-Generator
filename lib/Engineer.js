const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, gitHubUser) {
    super(name, id, email);
    this.gitHubUser = gitHubUser;
  }
  getInternInfo = function () {
    inquirer
      .prompt({
        type: "input",
        name: "gitHubUser",
        message: "Enter GitHub UserName:",
      })
      .then((answer) => {
        this.getInfo().then((info) => {
          this.name = info.name;
          this.id = info.id;
          this.email = info.email;
          this.gitHubUser = answer.gitHubUser;
        });
      });
  };
}

module.exports = Engineer;
