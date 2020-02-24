let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function odd(i) {
  if (i.length % 2 === 1) {
    return i; 
  };  
}; 

function oddLengths(arr) { 
  let lengthArr = []; 
  let onlyOddLen = []; 

  arr.reduce((acc, val) => 
            acc + lengthArr.push(val.length), []);  

  lengthArr.forEach(elem => {
    if (elem % 2 === 1) {
      onlyOddLen.push(elem); 
    }; 
  })

  return onlyOddLen;           
}

console.log(oddLengths(arr)); // => [1, 5, 3]