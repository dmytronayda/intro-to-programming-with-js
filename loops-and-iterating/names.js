let names = ['Dima', 'Maria', 'Mike', 'Pekka', 'Pablo', 'Alessandro']; 
let upperNames = []; 
let index = 0; 

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }


// for (let index = 0; index < names.length; index += 1) {
//   if (names[index] === 'Mike') continue; 

//   let upperCaseName = names[index].toUpperCase(); 
//   upperNames.push(upperCaseName); 
// }

names.forEach(function (name) {
  console.log(name.toUpperCase()); 
}); 

console.log("__________________"); 

names.forEach(name => console.log(name.toUpperCase())); 
// console.log(upperNames); 