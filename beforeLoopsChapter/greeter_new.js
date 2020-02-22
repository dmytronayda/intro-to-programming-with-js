
function getName(input) {
  let rlSync = require('readline-sync'); 
  let name = rlSync.question(input); 
  return name; 
}

let firstName = getName("What's your first name?\n"); 
let lastName = getName("What's your last name?\n"); 

console.log(getName(`Hello, ${firstName} ${lastName}. Nice to meet you!`)); 