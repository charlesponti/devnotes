# Control Structures

## Loops

```go

  i := 99

  for i >= 1 {
      fmt.Println(i, " bottles of beer on the wall...")
      i = i - 1
  }

```

In most programming languages, there are several different methods of looping
over a set of data or performing a repetitive task through looping. Most have
a `for` loop, a `while` loop, etc. Go, on the other hand, only has one looping
mechanism which is the `for` loop.

You can also write the above example like so:

```go
  for i := 99; i >= 0; i-- {
    fmt.Println(i)
  }
```

## Conditionals

### if/else
```go
if i % 2 == 0 {
    // divisible by 2
} else if i % 3 == 0 {
    // divisible by 3
} else if i % 4 == 0 {
    // divisible by 4
}
```

For performing actions based on conditions, the Go language has the same
if/else if/else mechanism that you will find in many other languages.

### switch

```go
switch cat {
  case 'kitten':
    fmt.Println("You're super cutez!")
  default:
    fmt.Println("You're an old cat! Yuck!")
}
```
Another way of handlign
