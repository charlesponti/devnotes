# Iteration

## .each

```ruby

numbers = [1,2,3]

numbers.each do |number|
  puts "#{number}"
end

```

## .upto


```ruby

starting_point = 1
end_point = 10

starting_point.upto(end_point) do |number|
  puts "#{number}"
end

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

```

## .downto


```ruby

starting_point = 10
end_point = 1

starting_point.downto(end_point) do |number|
  puts "#{number}"
end

# 10
# 9
# 8
# 7
# 6
# 5
# 4
# 3
# 2
# 1

```

## while

```ruby

count = 5

while count > 0
  puts "#{count}"
  count -= 1
end

# 5
# 4
# 3
# 2
# 1

```

## until

```ruby

count = 1

until count == 6
  puts "#{count}"
  coutn += 1
end

# 1
# 2
# 3
# 4
# 5

```
