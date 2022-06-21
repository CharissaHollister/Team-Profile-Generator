const fs = require("fs");
const inquirer = require("inquirer");
// const Employee = require("./Employee");

// class Manager {
// getName = () => { return inquirer.prompt({
//         type: "input",
//         name: "name",
//         message: "Enter employee name:",
//       })}
// this.name = getName.name
//   };

// const currentManager = new Manager();
// console.log(currentManager);

//////////////////////////////////////



class Employee {
  getEmployeeDataFunc = () => {
    inquirer.prompt(getEmployeeData).then(function (data) {
      console.log(data);
      return data;
    });
  };
  // getEmployeeDataFunc();
  construct(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
  }
}
var currentEmployee = new Employee();
console.log(currentEmployee);

// // module.exports = Employee;
