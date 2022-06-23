// needed to run the program
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/generatePage");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// Employee info arrays
var internSet = [];
var engineerSet = [];
var managerSet = [];

function getManagerObj() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Office Number:",
      },
      {
        message: "Enter manager name:",
        type: "input",
        name: "name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager email:",
      },
    ])
    .then((answer) => {
      const { officeNumber, name, id, email } = answer;
      const currentManager = new Manager(name, id, email, officeNumber);
      managerSet.push(currentManager);
      getNextEmployee();
    });
}
function getEngineerObj() {
  inquirer
    .prompt([
      {
        message: "Enter Engineer name:",
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
      {
        type: "input",
        name: "gitHubUser",
        message: "Enter GitHub UserName:",
      },
    ])
    .then((answer) => {
      const { name, id, email, gitHubUser } = answer;
      const currentEngineer = new Engineer(name, id, email, gitHubUser);
      engineerSet.push(currentEngineer);
      additionalEmployees();
    });
}
function getInternObj() {
  inquirer
    .prompt([
      {
        message: "Enter intern name:",
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
      {
        type: "input",
        name: "school",
        message: "Enter School Name:",
      },
    ])
    .then((answer) => {
      const { name, id, email, school } = answer;
      const currentIntern = new Intern(name, id, email, school);
      internSet.push(currentIntern);
      additionalEmployees();
    });
}
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
        getEngineerObj();
      } else if (data.role === "Intern") {
        getInternObj();
      } else {
        // invalid entry error and reask?
        console.log("error");
        return;
      }
    });
}
//"prompt for additional employees Y/N"
function additionalEmployees() {
  inquirer
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
      } else {
        writeSite();
      }
    });
}
//write html content
function writeSite() {
  const content = generatePage(managerSet, engineerSet, internSet);
  fs.writeFile("./dist/index.HTML", content, (err) => {
    if (err) throw err;
    console.log("The HTML has been saved!");
    copyStyle();
  });
}

//overall function to get all employee info
//"send manager, intern, engineer arrays info to generate page"
function copyStyle() {
  fs.copyFile("./lib/styleTemplate.css", "./dist/style.css", (err) => {
    if (err) throw err;
    console.log("The CSS has been saved!");
  });
}
//overall run the program
getManagerObj();
