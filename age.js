let rlSync = require('readline-sync'); 
let age = Number(rlSync.question("What's your age?\n")); //person's age 


let currentYear = 2020; //current year 
let plus10Years = [10, 20, 30, 40]; //array with +10 years 


console.log(`You are ${age} years old in ${currentYear}.`); 

console.log(`You will be ${age + plus10Years[0]} years old ${currentYear + plus10Years[0]}.`)

console.log(`You will be ${age + plus10Years[1]} years old in ${currentYear + plus10Years[1]}.`)

console.log(`You will be ${age + plus10Years[2]} years old in ${currentYear + plus10Years[2]}.`)

console.log(`You will be ${age + plus10Years[3]} years old in ${currentYear + plus10Years[3]}.`)

