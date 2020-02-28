## Notes on the object data type 

We can access a specific value in an object in two ways: 1) dot notation and 2) bracket notation.

```javascript 
// dot notation
> person.name
= 'Jane'

// bracket notation
> person['age']
= **27**
```

With dot notation, we place a dot (.) and a key name after the variable that references the object. With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. **However, if you have a variable that contains a key's name, you must use bracket notation**:

```javascript
> let key = 'name'
> person[key]
```

To remove something from an existing object, you can use `delete` keyword: 

```javascript
> delete person.age 
= true

> delete person['gender']
= true 
```

Objects include, but aren't limited to, the following types:

- Simple Objects
- Arrays
- Date Objects
- Functions

> JavaScript has two categories of data types: primitives and objects. The primitive types are strings, numbers, booleans, `null`, and `undefined`. Primitive types are the simplest, most basic types in JavaScript.

Objects are complex values composed of primitive values or other objects. For example, an array object has a `length` property that contains a number: a primitive value. **The critical thing to note is that we can change parts of an object, which means that objects are mutable.**

Primitive values are immutable; they don't have parts that one can change. Such values are said to be atomic; they're indivisible. 

```javascript
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1
= 4

> object
= { a: 1, b: 2, c: 4 }
```
The above example illustrates the difference between a primitive value and an object. The + operation on line 2 returns a new value (21), and assigns it to newNumber; the original value of number (20), remains unchanged. In contrast, writing a new value to the object's c property on line 10 changes the object's value. Note, however, that the c property has an entirely new number in it, precisely like what happened on line 2.


The static method Object.create provides a simple way to create a new object that inherits from an existing object:

```javascript
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob'
```


`Object.keys` returns the object's own keys: it does not include any keys from the prototype objects.