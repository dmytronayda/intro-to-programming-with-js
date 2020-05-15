let groceryList = ['paprika', 
                    'tofu', 
                    'garlic', 
                    'quinoa', 
                    'Dima', 
                    'carrots', 
                    'broccoli', 
                    'hummus'];

function checkOff(array) {
  while (array.length > 0) {
    let i = array.shift(); 
    console.log(i); 
  }
  console.log(array); 
}

checkOff(groceryList); 