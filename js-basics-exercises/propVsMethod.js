let trees = ['birch', 'pine', 'sequoia', 'palm tree']; 

console.log(trees[trees.length - 1]); // property lenght used; should return 'palm tree'
console.log(trees.pop()); // method pop() is used should return palm tree and change the original array 
console.log(trees[trees.length - 1]); // prop length now should return 'sequoia'