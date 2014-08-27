# Classes


## Interface

```objective-c

@interface myViewController : UIViewController

-(IBAction) showAlert;

@end
   
```

The interface is used to define the class, its instance variables, and the methods that will be used in the class. The interface is stored in a header file (`myViewController.h`)

## Implementation

```objective-c

import "myViewController.h"

@implementation myViewController

-(IBAction) showAlert 
{
  // add logic here
}

@end

```

The implementation contains most of the class code. This file imports the associated header file.

## Methods

```objective-c
+(int) myClassMethod;
+(int) myInstanceMethod;
```