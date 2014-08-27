# Numbers

In Go, there are severl different number types, though they are usually split
into one of two categories: integers and floating-point numbers.

## Integers

Any number without a decimal point.

Go has several integer types to represet the different bit sizes that the 
number should use:

| Type   |                                    |
|--------|------------------------------------|
| byte    | Synonym for uint8 |
| int     | The int32 or int64 range depending on the implementation |
| int8    | 8 bits (1 byte) [−128, 127] |
| int16   | 16 bits (2 bytes) [−32,768, 32,767] |
| int32   | 32 bits (4 bytes) [−2,147,483,648, 2,147,483,647] |
| int64   | 64 bits (8 bytes) [−9,223,372,036,854,775,808, 9,223,372,036,854,775,807] |
| rune    | Synonym for int32 |
| uint    | The uint32 or uint64 range depending on the implementation |
| uint8   | [0, 255] |
| uint16  | [0, 65 535] |
| uint32  | [0, 4 294 967 295] |
| uint64  | [0, 18 446 744 073 709 551 615] |
| uintptr | An unsigned integer capable of storing a pointer value (advanced) |

Unsigned integers only contain positive numbers (or zero). In addition there two 
alias types: byte which is the same as uint8 and rune which is the same as 
int32. Bytes are an extremely common unit of measurement used on computers 
(1 byte = 8 bits, 1024 bytes = 1 kilobyte, 1024 kilobytes = 1 megabyte, etc.) 
and therefore Go's byte data type is often used in the definition of other 
types. There are also 3 machine dependent integer types: uint, int and uintptr. 
They are machine dependent because their size depends on the type of 
architecture you are using.

Generally if you are working with integers you should just use the int type.

## Floating-point numbers

Any number with a decimal.
