package main

import (
  "fmt"
)

var a int64 = 127
var c int64 = 12789
var b float64 = 10.12365

func main() {
  fmt.Println(a)
  fmt.Println(b)
  fmt.Println(a+c)
  // fmt.Println(a+b) // invalid operation
}
