const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHubUser, role) {
    super(name, id, email);
    this.gitHubUser = gitHubUser;
    this.role = role;
  }
  getEngineerInfo = function () {
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
          this.role = "Engineer";
          console.log(
            this.name,
            this.id,
            this.email,
            this.gitHubUser,
            this.role
          );
        });
      });
  };
}

module.exports = Engineer;
