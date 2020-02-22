function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50.`)
  } else if (num < 0) {
    console.log(`${num} is less than 0.`)
  } else if (num > 100) {
    console.log(`${num} is more than 100.`)
  } else {
    console.log(`${num} is neither between 0 and 50 || less than 0 || more than 100.`)
  }
}

numberRange(80); 