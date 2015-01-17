## Conditionals

### if
This conditional will only execute the code within its body if the value given to it is truthy


```ruby
  if true
    cuddleKitten
  end
```

This code can also be written in one line using 'then':


```ruby
if true then cuddleKitten end
```

----

#### else

Used to provide a default operation to execute in the event that the value passed to if is false

```ruby
  if false
      puts 'meow'
  else
      puts 'woof'
  end
```

----

#### elsif
Used to add another conditional to an if statement


```ruby
  if false
    puts 'meow'
  elsif true
    puts 'purr'
  else
    puts 'woof'
  end
```

----

#### Ternary Operartor

```ruby
'meow'.class == String ? 'this is a string' : 'this is not a string'
```
- this is used for performing an if-else statement in one line
- the part before the question mark is the expression or value you are checking for truthy-ness
- the part between the question mark and the colon is the code to be returned or executed if the expression or value is truthy, while the part after the colon will be returned or executed if the expression or value is not truthy
