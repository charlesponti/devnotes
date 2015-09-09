# Functions

```
// anonymous function
var makeKittyPurr = function() {
	/* code to execute */
};
```

```
// named function
function makeKittyPurr() {
	/* code to execute */
}
```

## Ways to declare

1. Anonymous function
   - Only useful if used inline (e.g. a callback function or assigned to a variable), or
   - Called immediately, as in an IIFE
2. Named function
   - Makes for easier debugging, because the name of the function is displayed in stack traces

## Best Practices

* Should always return a value. This allows for method chaining. It may not seem necessary in the moment, but, as your project grows, you will see the value in this practice. 
