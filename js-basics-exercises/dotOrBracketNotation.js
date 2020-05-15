// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ? {prefix: 'Pacific'}; 


let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific'; // typeError prefix in brackets should be in paranthesis

console.log(ocean); // ? {}