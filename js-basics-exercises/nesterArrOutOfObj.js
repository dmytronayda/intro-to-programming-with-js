// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// }

// console.log(Object.entries(person)); 

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

function makeObj(nestedArr) {
  let obj = {}; 
  nestedArr.forEach(item => {
    obj[item[0]] = item[1]; 
  }); 
  return obj; 
}

console.log(makeObj(nestedArray)); 