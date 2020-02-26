## Notes on the object data type 

We can access a specific value in an object in two ways: 1) dot notation and 2) bracket notation.

```javascript 

// dot notation
> person.name
= 'Jane'

// bracket notation
> person['age']
= 27
```

With dot notation, we place a dot (.) and a key name after the variable that references the object. With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. **However, if you have a variable that contains a key's name, you must use bracket notation**:

```javascript
> let key = 'name'
> person[key]
```
