let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logToConsole(arr) {
  arr.forEach(element => {
    let nestedArr = element; 
    nestedArr.forEach(elem => {
      console.log(elem); 
    })
  });
}

logToConsole(vocabulary); 