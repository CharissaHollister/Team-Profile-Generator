const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.schoolName = schoolName;
    this.role = "Intern";
  }
}

module.exports = Intern;
