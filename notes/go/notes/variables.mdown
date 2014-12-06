# Variables

```go
  // var [identifier] [type]
  var a int
```

Variables are used to store values. Variables that are to be used locally
should follow the camelCase convention (numOfShips), while those are to be
exported must start with a capital letter (NumOfShips).

## Scope
Variables declared outside of any function have a global(or package) scope:
they are available in all source files of the package

Variables declared inside of a function have local scope:
they are only available within that function.

## Setting Value
Variable can get their value at compile time by assigning their value at the
point of declaration:

```go
  var a int = 5
```

The value of a will be set to 5 when the program is compiled, though its value
can obviously be computed or change during runtime of the program.

Variables are automatically declared with the default zero or null value for
its type:

* 0 for int
* 0.0 for float
* false for bool
* “” for string
// nil for pointer
// zero-ed struct
## Short Declaration Syntax
The `var` syntax is only used for global variables, as in those declared outside
of a function. If a variable is declared within a function, the `short
declaration syntax` should be used:

```go
function do_it() {
  a := 5
}
```

## Value types and reference types
