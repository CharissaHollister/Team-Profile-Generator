//pull in object Employee
const fs = require("fs");
const inquirer = require("inquirer");
// const Employee = require("./Employee");

class Manager {
  constructor() {
    //   // this.employeeVar = "employeeVar";
    this.name = getName();
    // //   this.id = this.getID();
    // //   this.email = this.getEmail();
    // //   this.officeNumber = this.getOfficeNumber();
  }
  getName =  function() {
    const name = inquirer.prompt({
      type: "input",
      name: "name",
      message: "Enter employee name:",
    });
    // this.name = name.name;
    // return this.name;
    return name.name;
  }
  async getID() {
    const id = await inquirer.prompt({
      type: "input",
      name: "id",
      message: "Enter employee ID:",
    });
    this.id = id.id;
  }
  async getEmail() {
    const email = await inquirer.prompt({
      type: "input",
      name: "email",
      message: "Enter employee email:",
    });
    this.email = email.email;
  }
  async getOfficeNumber() {
    const answer = await inquirer.prompt({
      type: "input",
      name: "officeNumber",
      message: "Enter office number:",
    });
    this.officeNumber = answer.officeNumber;
  }
}

// function getManagerObj() {
//   //   var currentManager = new Manager();
//   currentManager.getName();

//   console.log(currentManager);
//   return currentManager;
// }
const currentManager = new Manager();
console.log(currentManager);
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

module.exports = currentManager;
