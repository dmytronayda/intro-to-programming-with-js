let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  let matchedStrings = []; 
  
  arr.forEach(element => {
    if (element.match(regex)) {
      matchedStrings.push(element); 
    }; 
  });

  return matchedStrings; 
}

console.log(allMatches(words, /lab/)); 

