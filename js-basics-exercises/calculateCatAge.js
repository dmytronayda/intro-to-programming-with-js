function dogAge(num) {
  switch (num) {
    case 1: 
      console.log(15)
      break; 
    case 2: 
      console.log(15 + 9); 
      break; 
    default: 
      let fiveYearYears = num - 2; 
      let humanYears = 15 + 9 + fiveYearYears*5; 
      console.log(humanYears); 
  }
}

dogAge(15); 