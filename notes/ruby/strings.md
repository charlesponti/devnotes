# Strings

## Methods

### capitalize

```ruby
irb(main)> "meow".capitalize
=> "Meow"
```

### .strip

```ruby
irb(main)> "hello     ".strip
=> "hello"
```

The strip method will return the value of a string with the whitespace at the
end removed.

#### Note: This method does not change the value of the string.

### include?

```ruby
irb(main)> "cj".include?("c")
=> true
```

This method will check to see if the argument is present in the value the
method is called on.

### .concat

```ruby
irb(main)> "ROFL".concat("copter")
=> "ROFLcopter"
```

This method will combine two strings together.
