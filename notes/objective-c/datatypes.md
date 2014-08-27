# Objective-C Data Types

## NSString

```objective-c
NSString *myString = @"meerkat manor"
```
* immutable
* support for Unicode and UTF-8 characters

### stringWithFormat

```objective-c
int age = 15;
NSString *formattedString = [NSString stringWithFormat:@"I am @d years old", age]
```

### isEqualToString

Because NSString variables are objects instead of regular strings, you must use
a different method of determining if two NSStrings are equivalent. For this,
the isEqualToString method is used.

```objective-c
NSString *myString = @"meerkat manor"
NSString *myString2 = @"meerkat manor 2"
NSString *myString3 = @"meerkat manor"

[myString isEqualToString:myString2] // false
[myString isEqualToString:myString3] // true

```

### lowercaseString

```objective-c
NSString *myString = @"MeErKat MaNor";
NSLog(@"%@", [myString lowercaseString]);   // meerkat manor
```

### uppercaseString

```objective-c
NSString *myString = @"MeErKat MaNor";
NSLog(@"%@", [myString uppercaseString]);   // MEERKAT MANOR
```

### capitalizedString

```objective-c
NSString *myString = @"MeErKat MaNor";
NSLog(@"%@", [myString capitalizedString]); // Meerkat Manor
```

## NSMutableString

```objective-c
NSMutableString *myString = @"meerkat manor"
myString = @"meerkat manor 2"
```

* mutable
* Inherits all properties and methods from NSString

## NSNumber

```objective-c
NSNumber myAge = 15;
```

* immutable

## NSSet

```objective-c
NSString *alvin = @"Alvin";
NSString *simon = @"Simon";
NSString *theodore = @"Theodore";

NSSet *chipmunks = [NSSet setWithObjects: alvin, theodore, simon];
// or
NSArray *chipmunksArray = @[@"Alvin", @"Theodore", @"Simon"];
NSSet *chipmunksSet = [NSSet setWithArray: chipmunksArray];
```

* immutable unordered collection of Objective-C objects
