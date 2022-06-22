const EmployeeCopy = require("./EmployeeCopy");

function getEmployeeInfo() {
  const employee = new EmployeeCopy();
  return employee.getName();
}
getEmployeeInfo();
