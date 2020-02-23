let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(function(elem) {
    return elem.length;            // here return length of each elem of arr 
  }).filter(function(val) {        // combine .filter to .map  
    if (val % 2 === 1) {
      return val;                  // return only values that are odd 
    }; 
  }); 
}


console.log(oddLengths(arr)); // => [1, 5, 3]
