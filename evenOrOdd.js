function evenOrOdd(num) {
  if (typeof num === 'number') {
    if ((num % 2) === 1) { //checking if num is Odd 
      console.log('odd'); 
    } else {
      console.log('even');  
    }
  } else {
    console.log('this is not a number!')
  }

}

evenOrOdd('hello stupid');