let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

function carKeys(obj) {
  let keys = Object.keys(obj); 
  return keys; 
}

console.log(carKeys(vehicle)); 