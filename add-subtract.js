function add (a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

function times(num1 , num2) {
  return num1 * num2; 
}

// let sum = add(20, 45); 
// console.log(sum); 
console.log(add(20, 45)); 

// let difference = subtract(80, 10); 
// console.log(difference); 

console.log(subtract(80, 10)); 

console.log(times(add(20, 45), subtract(80,10))); 