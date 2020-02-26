let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);  
myObj.xyz = 3; 

for (let prop in myObj) {
  console.log(myObj[prop]); 
}