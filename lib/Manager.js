//pull in object Employee
// const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber = function () {
    inquirer
      .prompt({
        type: "input",
        name: "officeNumber",
        message: "Enter Office Number:",
      })
      .then((answer) => {
        this.getInfo().then((info) => {
          this.name = info.name;
          this.id = info.id;
          this.email = info.email;
          this.officeNumber = answer.officeNumber;
          console.log(this.name, this.id, this.email, this.officeNumber);
        });
      });
  };
}

module.exports = Manager;

// function getManagerObj() {
//   //   var currentManager = new Manager();
//   currentManager.getName();

//   console.log(currentManager);
//   return currentManager;
// // }
// const currentManager = new Manager();
// console.log(currentManager);
// getManagerObj();

//add officeNumber

// Overridden to return 'Manager'
// class Manager extends Employee {
//   constructor(name, id, email) {
//     super(name, id, email);
//     this.officeNumber = this.getOfficeNumber();
//   }
//   async getOfficeNumber() {
//     const answer = await inquirer.prompt({
//       type: "input",
//       name: "officeNumber",
//       message: "Enter office number:",
//     });
//     //   .then(function (answer) {
//     return answer.officeNumber;
//     //   });
//   }
// }

// module.exports = currentManager;
