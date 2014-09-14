## Number

```js
  var my_number = 1
```

According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (number between -(253 -1) and 253 -1). There is no specific type for integers. In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number).

To check for larger or smaller values than +/-Infinity, you can use the constants Number.MAX_VALUE or Number.MIN_VALUE and starting with ECMAScript 6, you are also able to check if a number is in the double-precision floating-point number range using Number.isSafeInteger() as well as Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER. Beyond this range, numbers in JavaScript are not safe anymore, i.e. only every second mathematical integer can be represented in JavaScript's number type.

The number type has only one integer that has two representations: 0 is represented as -0 and +0. ("0" is an alias for +0). In the praxis, this has almost no impact. For example +0 === -0 is true. However, you are able to notice this when you divide by zero:

Although a number often represents only its value, JavaScript provides some binary operators. These can be used to represent several Boolean values within a single number using bit masking. This is usually considered a bad practice, however, JavaScript offers no other means to represent a set of Booleans (like an array of Booleans or an object with Boolean values assigned to named properties). Bit masking also tends to make code more difficult to read, understand, and maintain. It may be necessary to use such techniques in very constrained environments, like when trying to cope with the storage limitation of local storage or in extreme cases when each bit over the network counts. This technique should only be considered when it is the last measure that can be taken to optimize size.