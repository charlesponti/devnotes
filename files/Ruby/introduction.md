# RUBY

![Ruby Logo](../../assets/images/ruby-logo.png)

Ruby is a dynamic, general-purpose, object-oriented language created in 1995 by
Yukihiro Matsumoto. He created Ruby with the explicit goal of making a
programming language that is readable by humans and fun for developers to work
with.

As an object-oriented language, everything in Ruby is an object and belongs to
class. A class is an object from which other objects can inherit and overwrite
values and methods. For example, the number 2 is an object belonging to the
Fixnum class. Fixnum, itself is an object, that extends from the Class class.

## IRB & Pry

**IRB**, which stands for Interactive Ruby, allows you to execute Ruby code from the command line. It is most commonly used to test the outcome of code. Every time
you enter IRB, you are creating a new session, in which Ruby will store the
values and state of any variables and classes you create.

**Pry** is a community-created wrapper for IRB that provides additional features,
syntax highlighting, state navigation, and runtime invocation, which is handy
for debugging applications

## Common Methods

### puts

```ruby
irb(main)> puts 2 + 2
=> 4
```

This method will write to the terminal the value that comes after it.

### gets

```ruby
 x = gets # [ This wil assign the user's input to the variable x ]
```

This method halts the execution of an application and wait for user input. It
will stop waiting when the user presses the carriage return key. It is used to
capture user input in command line applications.


### .class

```ruby
irb(main)> 2.class
=> Fixnum
irb(main)> 10.34.class
=> Float
irb(main)> 'Gerry'.class
=> String
```

Returns the class of the object upon which it is called

### .include?

```ruby
irb(main)> [1,2,3].include?(2)
=> true
irb(main)> [4,5,6].include?("j")
=> false
```

This method will check to see if the argument is present in the value the
method is called on.

### !

```ruby
irb(main)> z = "meow          ".strip
=> "meow"
irb(main)> z == "meow"
=> false
irb(main)> z.strip!
=> "meow"
irb(main)> z == "meow"
=> true
```

If you call an exclamation point after a method name, this will make a permanent
change to the value the method is called upon.

## Time

### now

```ruby
Time.now
```

This returns the current time.

### strftime

```ruby
irb(main)> Time.now.strftime '%Y %B'
=> '2014 January'
irby(main)> Time.now.strftime '%B %Y'
=> 'January 2014'
```

This method stands for 'string format time'. It takes a string containing
matchers that are found in the Ruby documentation and will return a string
representing the attributes of a Time instance that are in the string passed to
the method.
