let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray = array.filter(function(val) {
  if (Number.isInteger(val) === true) {
    return val; 
  }; 
})




console.log(newArray); // => [1, 3, -4]