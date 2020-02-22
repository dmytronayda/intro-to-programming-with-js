let counter = 0;         // counter is set to 0 
                            // after 1st loop counter is set to 1

while (counter = 1) {    // because we have set operator here intead of comparison one 
                         // that means it's always true and going to end up in infinite loop 
  console.log(counter);  // 0 is logged to the console 
                            // counter is logged to console => 1 
                             // counter is logged to console => 2 
                               // counter is logged to console => 2
                               // . 
                               // . 
                               // . 
  counter += 1;          // counter now is set to 1    
                            // counter == 2 now 

  if (counter > 2) {     // nothing is done on 1st loop
    break;                  // nothing is done on 2nd loop 
  }
} 