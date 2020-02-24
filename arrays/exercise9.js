let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function if3Inside(arr) {
  let newArr = arr.filter(num => num === 3); 
  if (newArr.length < 1) {
    return false; 
  } else {
    return true; 
  }; 
}


console.log(if3Inside(numbers1));
console.log(if3Inside(numbers2));
console.log(if3Inside(numbers3));

// simple solution 

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));