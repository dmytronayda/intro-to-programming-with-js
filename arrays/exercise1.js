let array1 = [1, 2, undefined, 4]; // length 4 - correct 

let array2 = [1];
array2.length = 5; // length 5 - correct 

let array3 = []; 
array3[-1] = [1]; // length 1 - incorrect! Index positions must be non-negative integers starting from 0. 
                  //Negative and non-integer indexes don't get taken into account when determining an array's length.

let array4 = [1, 2, 3, 4, 5]; 
array4.length = 3;  //length 3 - correct 

let array5 = [];
array5[100] = 3; // length 100 - incorrect, length of the array is highest index + 1