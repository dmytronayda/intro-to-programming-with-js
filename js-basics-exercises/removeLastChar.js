function removeLastChar(string) {

  let arr = string.slice(0, string.length -1); 
  console.log(arr); 
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'