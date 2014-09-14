---settings

title: Data Types

---settings

## String

```js
 var my_string = 'hello';
```

* can be declared using either single or double quotes
* If you are writing a string that has quotes within it, you can use escaping by using a backslash( \ ).

```js
  var my_string = 'She\'ll be here soon'
```

## Number

```js
  var my_number = 1
```

## Float

```js
  var my_float = 42.99
```

## Boolean

```js
  var truthy_value = true;
  var falsy_value = false;
```

## Null vs Undefined
  * `undefined` means a variable has been declared but has not yet been assigned a value. On the other hand, `null` is an assignment value. It can be assigned to a variable as a representation of no value.
  * Also, `undefined` and `null` are two distinct types: `undefined` is a type itself (`undefined`) while `null` is an object.
  * Unassigned variables are initialized by JavaScript with a default value of `undefined`. JavaScript never sets a value to `null`. That must be done programmatically.

## Array

An array type is a data type that is meant to describe a collection of elements (values or variables), each selected by one or more indices (identifying keys) that can be computed at run time by the program. It can store any data type, such as strings, numbers, hashes, and other arrays.

```js
  var newArray = [1, 2, "kittens", true, [1,2,3], { kittenSound: 'meow'}]
```

The values of an array are accessed by their index number.

```js
  newArray[0] // 1
```

**Note** Array indexes start at 0

```js
  new_array[2] // 'kittens'
```

You can also access a range of values in an array using a range.

```js
  new_array[0..2] // [1,2,'kittens']
```

## Object

```js
  var x = { cat: 'feline', dog: 'canine' }
```

* used to organize data into key-value pairs

* the keys in an object can be assigned to any data type, including another object

* Values inside of an object are accessed through their keys. You can do this in two ways:

```js
  x["cat"] /** returns feline */
```

```js
  x.cat /** returns feline */
```


## Functions

```js
  var functionName = function(arguments) {
    /** code to execute */
  };
```

* Variables declared inside of a function is only accessible within that funciton, while variables declared outside of functions in the global scope are accessible within any function
