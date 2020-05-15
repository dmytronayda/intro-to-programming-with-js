function bmi(heightInCantimters, weightInKilograms) {
  let heightInMeters = heightInCantimters / 100; 
  let bmi = (weightInKilograms / heightInMeters**2).toFixed(2).toString();
  console.log(bmi);  
}

bmi(160, 53);