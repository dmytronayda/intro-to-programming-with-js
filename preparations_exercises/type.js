function filter(input) {
  //is input an array? 
  return Array.isArray(input); 
}

console.log(filter([0, 3, 4])); // true 
console.log(filter('Dmytro'));  //false
console.log(filter(5652223));   //false