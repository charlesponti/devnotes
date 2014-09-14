---settings

title: String

---settings

```js
  var my_string = 'hello';
  // "hello"
  
  var my_string = 'She\'ll be here soon'
  // "She'll be here soon"
```

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf method, or extracting substrings with the substring method.

### `parseInt()`

```js
  var age = '15';

  var convertedAge = parseInt(age);

  console.log(convertedAge === 15)
  // true
```

### `parseFloat()`

```js
  var weightInGrams = '15.5';

  var convertedWeight = parseInt(weightInGrams);

  console.log(convertedWeight === 15)
  // false
  
  console.log(convertedWeight === 15.5)
  // true
```

#### NOTE

A common way of converted strings with numbers into numbers is by using the 
`Number` contructor.

```js
  var weightInGrams = '15.5';

  var convertedWeight = Number(weightInGrams);

  console.log(convertedWeight === 15)
  // false
  
  console.log(convertedWeight === 15.5)
  // true
```