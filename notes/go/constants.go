package main

// Constants:
// Data that does not change
// Can only be of type boolean, number, or string
// const [identified] [type] = [value]

// Numeric constants have no size or sign and
// cannot overflow
const Pi = 3.14159

// Constants can overflow if they are assigned
// with too little precision

// Enumerations
// iota -> Starts at zero and increases in value
// with every usage.
const (
  a = iota // 0
  b = iota // 1
  c = iota // 2
)
