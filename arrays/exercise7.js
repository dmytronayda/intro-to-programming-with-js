let numbers = [3, 5, 7];

let sumOfSquares = numbers.map(num => num * num)
                          .reduce((acc, val) => acc + val, 0); 



console.log(sumOfSquares); // => 83