let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);  // get keys array out of obj Object 

let upperKeys = keys.map(key => key.toUpperCase()); // assign uppercase keys to new array 

console.log(upperKeys); // log vals from upperKeys array to console
console.log(obj); // keys obj is not mutated

