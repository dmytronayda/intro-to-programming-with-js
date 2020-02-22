for (let i = 0; i < 5;) { // probably produce an error with increment missing 
                          // error 
  console.log(i += 1); 
}

// In reality no error: 
// RBM-DNAIDA-A01:loops-and-iterating dnaida$ node exercise4.js 
// 1
// 2
// 3
// 4
// 5
// RBM-DNAIDA-A01:loops-and-iterating dnaida$ 
