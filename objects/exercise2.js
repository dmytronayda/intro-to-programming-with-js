1 // not a string -- JS coerces non-string to string value, so this one is correct too 
 
'1' // string == can be a key 

undefined // not a string  -- JS coerces non-string to string value, so this one is correct too 

'hello world' // string == can be a key 

true // not a string  -- JS coerces non-string to string value, so this one is correct too 

'true'  // string == can be a key 


// All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.