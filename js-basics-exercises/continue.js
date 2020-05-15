let cities = ['Istanbul', 
              'Los Angeles', 
              'Tokyo', 
              null, 
              'Vienna', 
              null, 
              'London', 
              'Beijing', 
              null];

let i; 

for (i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }
  
  let charLen = cities[i].length; 
  console.log(charLen); 
}

