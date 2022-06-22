// Initiates and runs the program
const fs = require("fs");
const inquirer = require("inquirer");
// const confirm = require("inquirer-confirm");
const generatePage = require("./src/generatePage");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// var currentmanager;
var internSet = [];
var engineerSet = [];

//"runs Manager as role for first entry"
function getManagerObj() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Office Number:",
      },
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
    ])
    .then((answer) => {
      const { name, id, email, officeNumber } = answer;
      const currentManager = new Manager(name, id, email, officeNumber);
      console.log(currentManager);
    });
}
getManagerObj();
//"Prompt for intern or engineer"
function getNextEmployee() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Pick employee role",
      choices: ["Engineer", "Intern"],
    })
    .then(function (data) {
      // console.log(data);
      if (data.role === "Engineer") {
        //"run Engineer as role"
        //"push engineer to array"
        const engineer = new Engineer();
        engineer.getEngineerInfo();
        engineerSet.push(engineer);
        // return engineerSet;
        additionalEmployees();
      } else if (data.role === "Intern") {
        const intern = new Intern();
        intern.getInternInfo();
        internSet.push(intern);
        // return internSet;
        additionalEmployees();
      } else {
        // invalid entry error and reask?
        console.log("error");
        return;
      }
    });
  // .then(function () {
  //   additionalEmployees();
  // });
}
// getNextEmployee();
// console.log(internSet, engineerSet, currentManager);
//"prompt for additional employees Y/N"
function additionalEmployees() {
  inquire
    .prompt([
      {
        type: "confirm",
        name: "more",
        message: "Do you have more employees to add?",
      },
    ])
    .then((answers) => {
      if (answers.more) {
        getNextEmployee();
      }
    });
}
// additionalEmployees();
//"send manager info to generate page"
//"send engineer array info to generate page"
//"send intern array info to generate page"

//overall run the program
function getAllEmployees() {
  // const more = "Yes";
  getManagerObj();
  getNextEmployee();
  additionalEmployees();
  // if (more === "Yes") {
  //   getNextEmployee();
  //   additionalEmployees();
  // } else if (more === "no") {
  const content = generatePage(currentManager, engineerSet, internSet);
  fs.writeFile("./dist/index.HTML", content, (err) => {
    if (err) throw err;
    console.log("The HTML has been saved!");
  });
  fs.copyFile("./lib/styleTemplate.css", "./dist/style.css", (err) => {
    if (err) throw err;
    console.log("The CSS has been saved!");
  });
}
// }
// getAllEmployees();

// prompted to enter the team manager’s name, employee ID, email address, and office number //one time
//Employee
//Manager

// function getEmployeeDataFunc() {
//   var currentEmployee = new Employee();
//   //     return data;
//   console.log(currentEmployee);
// }
// getEmployeeDataFunc();
// const testExample = new Example();
// const id = await testExample.id;
// console.log(id);

//prompted to enter each team member information
//get role
//Employee
//Intern or Engineer

// a menu with the option to add an engineer or an intern or to finish building my teammember

// var justAGuy = new Person();

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
