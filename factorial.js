function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// let factorial1 = times(1, 1); 
// let factorial2 = times(2, factorial1); 
// let factorial3 = times(3, factorial2); 
// let factorial4 = times(4, factorial3); 
// let factorial5 = times(5, factorial4); 


times(times(times(times(times(1,1), 2), 3),4),5); 
