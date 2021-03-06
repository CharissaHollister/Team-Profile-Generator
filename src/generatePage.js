// generate a webpage (html) that displays my team's basic info (email, github)
// arrays of all employee infomation managerSet, engineerSet, internSet;
function generatePage(managerSet, engineerSet, internSet) {
  // console.log(managerSet, engineerSet, internSet);
  const managerSec = `<div class="manager-card">
  <div class="card-header">
    <h2>${managerSet[0].name}</h2>
    <h2><img src="https://static.thenounproject.com/png/4926385-200.png" width="20px"></img>  ${managerSet[0].role}</h2>
  </div>
  <div class="card-body">
    <p>ID: ${managerSet[0].id}</p>
    <p>Email: <a href="mailto: ${managerSet[0].email}">${managerSet[0].email}</a></p>
    <p>Office Number: ${managerSet[0].officeNumber}</p>
  </div>
</div>`;
  let engineerSec = "";
  engineerSet.forEach((engineerEmployee) => {
    let engineerSecPart = `<div class="engineer-card">
  <div class="card-header">
    <h2>${engineerEmployee.name}</h2>
    <h2><img src="https://static.thenounproject.com/png/4918290-200.png" width="20px"></img>${engineerEmployee.role}</h2>
  </div>
  <div class="card-body">
    <p>ID: ${engineerEmployee.id}</p>
    <p>Email: <a href="mailto: {engineerEmployee.email}">${engineerEmployee.email}</a></p>
    <p>GitHub UserName: <a href="https://github.com/${engineerEmployee.gitHubUser}">  ${engineerEmployee.gitHubUser}</a></p>
  </div>
</div>`;
    engineerSec = engineerSec.concat(" ", engineerSecPart);
  });
  let internSec = "";
  internSet.forEach((internEmployee) => {
    let internSecPart = `<div class="intern-card">
  <div class="card-header">
    <h2>${internEmployee.name}</h2>
    <h2><img src="https://static.thenounproject.com/png/2626819-200.png" width="20px"></img>  ${internEmployee.role}</h2>
  </div>
  <div class="card-body">
    <p>ID: ${internEmployee.id}</p>
    <p>Email: <a href="mailto: ${internEmployee.email}">${internEmployee.email}</a></p>
    <p>School: ${internEmployee.school}</p>
  </div>
</div>`;
    internSec = internSec.concat(" ", internSecPart);
  });
  var content = ` <!DOCTYPE html>

<!--- Team Profile Generator--->
<!---by Charissa Hollister--->
<!---****************************--->

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header class="header">
      <h1>My Team</h1>
    </header>
    <div class="wrapper">
        <!-- manager card  -->
        ${managerSec}
        <!-- engineer cards  -->
        ${engineerSec}
        <!-- intern cards  -->
        ${internSec}
    </div>
  </body>
</html>
`;
  //"content" used in writefile function
  // console.log(content);
  return content;
}
// generatePageFunc("testman", "testeng", "testint");
module.exports = generatePage;
