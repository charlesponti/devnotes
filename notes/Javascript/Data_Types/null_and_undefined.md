### Null

```js
  var nullVariable = null;
  
  nullVariable === null
  // true
```

The Null type has exactly one value: null.

### Undefined

```js
  var undefinedVariable;

  undefinedVariable === undefined
  // true
```
A variable that has not been assigned a value has the value undefined. 

### NOTES

`undefined` can mean either that a variable has been declared but has not yet 
been assigned a value or that a variable has not been declared at all. On the 
other hand, `null` is an assignment value. It can be assigned to a variable as 
a representation of no value.

Also, `undefined` and `null` are two distinct types: `undefined` is a type 
itself (`undefined`) while `null` is an object.

Unassigned variables are initialized by JavaScript with a default value of 
`undefined`. JavaScript never sets a value to `null`. That must be done 
programmatically.
