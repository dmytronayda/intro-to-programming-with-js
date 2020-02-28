let objToCopy = {
  foo: 1,
  bar: 2,
};


function copyObj(objToCopy, keysArr) {
  let newObj = {}; 
  // define the keys to copy 
  if (keysArr){
    keysArr.forEach(key => {
      newObj[key] = objToCopy[key];    
    });
    
    return newObj;  
  } else {
    return Object.assign(newObj, objToCopy); 
  }; 
}


let newObj = copyObj(objToCopy); 
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined