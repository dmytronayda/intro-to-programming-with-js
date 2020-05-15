function compareByLength(str1, str2) {
  let str1Len = str1.length; 
  let str2Len = str2.length;
  
  if (str1Len > str2Len) {
    console.log(1); 
  } else if (str2Len > str1Len){
    console.log(-1);
  } else {
    console.log(0);
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0