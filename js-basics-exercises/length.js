function isBlank(str) {
  if (str.length === 0) {
    return true; 
  } else if (!str.replace(/\s/g, '').length) {  // check if and replace whitespaces with ''
    return 'true: string only contains whitespace (ie. spaces, tabs or line breaks';
  } else {
    return false; 
  }
}
console.log(isBlank('mars')); // false 
console.log(isBlank('   '));  // true: string only contains whitespace (ie. spaces, tabs or line breaks
console.log(isBlank(''));     // true