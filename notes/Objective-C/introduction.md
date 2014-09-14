# Objective C

## Data Types

### Character(char)

```objective-c
char m;

m = 'c';
```

### String (NSString)

```objective-c
NSString m;

m = 'c';
```
### Numberic

#### Integer (int)

```objective-c
int age;

age = 15;
```
Integers are whole numbers without a fractional part, such as 2,45, 1234.

#### Float (float)

Floats are floating-point numbers, such as 1.2, 5.4, 10.1235.

#### Double (double)

Doubles are essentially the same as Floats, although they allow you to use
double precision floating-point numbers. This means that if you use 3.0, it 
will be interpreted as 3.

### Boolean (bool)

A Boolean can be either true or false.

### Date (date)

### Array (array)

An Array is a list of other variables or values.

## Variables

```objective-c
char m;

m = 'c';
```

Variables allow the developer to store values using an identifier that can
be referenced in other areas of the application.

## Constants

```objective-c
const int age = 15;
```
Constants are variables whose value cannot be changed once its value is set.

## Pointers

Pointers point to a specific place in memory where an object is stored. When
you want to retrieve the object and place it into a variable, you must preface
the variable with an asterick(*).

```objective-c
MyCustomClass *myClassInstance;
```

When using primitive data types, spaces in memory are automatically allocated,
but when referencing an object, you must allocate memory manually.

```objective-c
MyCustomClass *myClassInstance;
myClassInstance = [[MyCustomClass alloc] init];
```

If you wanted to call a method on this instance, you do so like so:

```objective-c
[myClassInstance myMethodName];
```

If you wanted to pass a parameter to the method, you would do so like so:

```objective-c
int myAge;
myAge = 15;
[Person setAge:myAge];
```

