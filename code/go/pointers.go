package main

import "fmt"

func main() {
  // Declare variable
  int1 := 5

  // Store the memory address of int1 in a pointer variable
  var intPointer *int
  intPointer = &int1

  fmt.Printf("An integer: %d, it’s location in memory: %p\n", int1, &int1)
  fmt.Printf("The value at location %p is %d\n", intPointer, *intPointer)
}
