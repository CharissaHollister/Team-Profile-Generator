// generate a webpage (html) that displays my team's basic info (email, github)
// manager, engineerSet, internSet;
function generatePageFunc(managerSet, engineerSet, internSet) {
  //write card for manager
  const managerSec = `Manager ${managerSet[0].name} information section`;
  //write card for each engineer
  //loop until all are created
  let engineerSec = `combined engineer ${engineerSet[0].name} information sections`;
  //write card for each intern
  //loop until all are created
  let internSec = `combined intern ${internSet[0].name} information sections`;

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
module.exports = generatePageFunc;
