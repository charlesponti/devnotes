
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