# Types and Operators

## Comparisons
Only variables of the same type can be compared.

## Numeric

### ints and floats
Go has `architecture dependent types` such as int, uint, uintptr. These have
appropriate length fo the machine on which the program runs:

* **int** is the default. It takes a 32 bit(4 bytes) on a 32bit machine and
64 bit (8 bytes) on a 64bit machine. The same goes for unsigned ints.

* **uintptr** is an unsigned integer large enough to store a pointer value.

Go has no float type.

These `architecture independent types` have a fixed size (bits) indicated by
their name:

For integers:
  int8 (-128 -> 127)
  int16 (-32768 -> 32767)
  int32 (− 2,147,483,648  ->  2,147,483,647)
  int64 (− 9,223,372,036,854,775,808 -> 9,223,372,036,854,775,807)

For unsigned integers:
  uint8 (with alias byte, 0 -> 255)
  uint16 (0 -> 65,535)
  uint32 (0 -> 4,294,967,295)
  uint64 (0 -> 18,446,744,073,709,551,615)

For floats:
  float32 (+- 1O-45 -> +- 3.4 * 1038 )
  (IEEE-754) float64 (+- 5 * 10-324 -> 1.7 * 10308 )

A float32 is reliable accurate to 7 decimal places while a float64 is to about
15 decimal places. For this reason, float64 should be used whenever possible
because all functions in the "math" package expect that type.
