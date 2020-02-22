let rlSync = require('readline-sync');


function multiply(num1, num2) {
  return num1 * num2; 
}

let firstNum = rlSync.question(`Enter the first number:`); 
let secondNum = rlSync.question(`Enter the second number:`); 

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`); 