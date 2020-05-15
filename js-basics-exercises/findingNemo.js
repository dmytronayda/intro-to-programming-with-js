let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let i; 

for (i = 0; i < fish.length; i += 1) {
  if (fish[i] === 'Nemo') {
    break; 
  } else {
    console.log(fish[i]); 
  }
}