// Initiates and runs the program
const fs = require("fs");
const inquirer = require("inquirer");
var confirm = require("inquirer-confirm");
const generatePage = require("./src/generatePage");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// var currentmanager;
var internSet = [];
var engineerSet = [];
//"runs Manager as role for first entry"
function getManagerObj() {
  const currentManager = new Manager();
  // console.log(currentManager);
  return currentManager.getOfficeNumber();
}
getManagerObj();
//"Prompt for intern or engineer"
function getNextEmployee() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Pick employee role",
      options: ["Engineer", "Intern"],
    })
    .then(function (data) {
      if (data.role === "Engineer") {
        //"run Engineer as role"
        //"push engineer to array"
        engineer = new Engineer();
        engineerSet.push(engineer);
        return engineerSet;
      } else if (data.role === "Intern") {
        //"run Intern as role"
        //"push intern to array"

        intern = new Intern();
        internSet.push(intern);
        return internSet;
      } else {
        // invalid entry error and reask?
      }
    });
}

//"prompt for additional employees Y/N"
function additionalEmployees() {
  confirm("Do you have more employees to add?").then(
    function confirmed() {
      getNextEmployee();
    },
    function cancelled() {
      return;
      // invalid entry error and reask?
    }
  );
}

//"send manager info to generate page"
//"send engineer array info to generate page"
//"send intern array info to generate page"

//overall run the program
function getAllEmployees() {
  currentManager = getManagerObj();
  // getNextEmployee();
  // additionalEmployees();
  content = generatePage(currentManager, "engineerSet", "internSet");
  fs.writeFile("./dist/index.HTML", content, (err) => {
    if (err) throw err;
    console.log("The HTML has been saved!");
  });
  fs.copyFile("./lib/styleTemplate.css", "./dist/style.css", (err) => {
    if (err) throw err;
    console.log("The CSS has been saved!");
  });
}
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
