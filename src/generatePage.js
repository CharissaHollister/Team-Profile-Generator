// generate a webpage (html) that displays my team's basic info (email, github)
// arrays of all employee infomationmanagerSet, engineerSet, internSet;
function generatePage(managerSet, engineerSet, internSet) {
  console.log(managerSet, engineerSet, internSet);
  const managerSec = `Manager ${managerSet[0].name} information section`;
  let engineerSec = "";
  engineerSet.forEach((engineerEmployee) => {
    let engineerSecPart = `Engineer ${engineerEmployee.name} information sections`;
    engineerSec = engineerSec.concat(" ", engineerSecPart);
  });
  let internSec = "";
  internSet.forEach((internEmployee) => {
    let internSecPart = `Intern ${internEmployee.name} information sections`;
    internSec = internSec.concat(" ", internSecPart);
  });
  var content = ` fixed info blah blah
${managerSec}
${engineerSec}
${internSec}

  fixed info blah blah
`;
  //"content" used in writefile function
  console.log(content);
  return content;
}
// generatePageFunc("testman", "testeng", "testint");
module.exports = generatePage;
