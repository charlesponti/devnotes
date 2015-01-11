# Arrays

<prism language='ruby'>
  new_array = [1, 2, 3]
</prism>

An array type is a data type that is meant to describe a collection of
elements (values or variables), each selected by one or more indices
(identifying keys) that can be computed at run time by the program. It can store
any data type, such as strings, numbers, hashes, and other arrays.


### Array.new

<prism language='ruby'>
  new_array = Array.new(1,2,3)
</prism>

You can also create a new Array by using the Array.new command.

If you are only going to create an array without assigning it to another
variable at a later point in your application's execution, you should use the
literal method of defining an array. Though, if you are going to assign the
array to a new variable and want to retain the original value, you should use
Array.new.

If you assign an array to another variable using the literal method, any changes
to the second reference variable will make changes to the orignal variable, as
seen below.

<prism language='ruby'>
  irb(main)> array_one = [1, 2, 3]
  => [1,2,3]
  irb(main)> array_two = array_one
  => [1,2,3]
  irb(main)> array_two[1] = 5
  => [1,5,3]
  irb(main)> array_one
  => [1,5,3]
  irb(main)> array_two
  => [1,5,3]
</prism>

You can stop this from happening by using Array.new.

<prism language='ruby'>
  irb(main)> array_one = [1, 2, 3]
  => [1,2,3]
  irb(main)> array_two = Array.new(array_one)
  => [1,2,3]
  irb(main)> array_two[1] = 5
  => [1,5,3]
  irb(main)> array_one
  => [1,2,3]
  irb(main)> array_two
  => [1,5,3]
</prism>

## Accessing Values

The values of an array are accessed by their index number, like so:

<prism language='ruby'>
  irb(main)> new_array = ['cats', 'felines', 'kittens']
  irb(main)> new_array[2]
  => 'kittens'
</prism>

You can also access a range of values in an array using a range, like so:

<prism language='ruby'>
  new_array[1..2]
  => ['felines', 'kittens']
</prism>

**Note: Array indexes start at 0**

## Array Methods

### push or <<
- adds items to an array


<prism language='ruby'>
  irb(main)> array_name = [1,2,3]
  irb(main)> array_name.push(4)
  => [1,2,3,4]
  irb(main)> array_name << 5
  => [1,2,3,4,5]
</prism>

----

### empty?

<prism language='ruby'>
  irb(main)> array_name = []
  irb(main)> array_name.empty?
  => true
  irb(main)> array_name = [1,2,3]
  irb(main)> array_name.empty?
  => false
</prism>

This method will return true if the array is empty and false if the array has
values.

-----

### pop

<prism language='ruby'>
  irb(main)> array_name = [1,2,3]
  irb(main)> array_name.pop
  => [1, 2]
</prism>

This method removes the last item from an array and returns the removed value.

----

### shift

<prism language='ruby'>
  irb(main)> array_name = [1,2,3]
  irb(main)> array_name.shift
  => [2,3]
</prism>

This method removes the first item from an array and returns the removed value.

----

### unshift

<prism language='ruby'>
  irb(main)> array_name = [2,3]
  irb(main)> array_name.unshift(1)
  => [1,2,3]
</prism>

This method adds items to the beginning of an array.
----

### sort

<prism language='ruby'>
  irb(main)> array_name = [3,2,1]
  irb(main)> array_name.sort
  => [1,2,3]
  irb(main)> array_name
  => [3,2,1]
  irb(main)> array_name.sort!
  => [1,2,3]
  irb(main)> array_name
  => [1,2,3]
</prism>

This method returns an array with the values of the original array sorted from
lowest to greatest. If you want to make a permanent change to the original array,
add an '!' to the end.

----

### shuffle

<prism language='ruby'>
  irb(main)> array_name = [1,2,3,4,5]
  irb(main)> array_name.shuffle
  => [3,2,4,1,5]
</prism>

This method returns an array with the values of the original array moved around in a random order

----

### reverse

<prism language='ruby'>
  irb(main)> array_name = [1,2,3]
  irb(main)> array_name.reverse
  => [3,2,1]
  irb(main)> array_name
  => [1,2,3]
  irb(main)> array_name.reverse!
  irb(main)> array_name
  => [3,2,1]
</prism>

This method returns an array with the values of the original array in reverse
order. If you want to make a permanent change to the original array, add an '!'
to sort.

----
### join

<prism language='ruby'>
  irb(main)> array_name = ['the','cat','is','awesome']
  irb(main)> array_name.join(' ')
  => 'the cat is awesome'
</prism>

This method joins the values of the array into a string delimited by the value
passed to this method.

----

### any?

<prism language='ruby'>
  irb(main)> array_name = [false, true, false]
  irb(main)> array_name.any?
  => true
</prism>

This method returns true if any of the values within the array are truthy.

----

### all?

<prism language='ruby'>
  irb(main)> array_name = [false, true, false]
  irb(main)> array_name.all?
  => false
  irb(main)> array_name = [true, true, true]
  irb(main)> array_name.all?
  => true
</prism>

This method returns true if all of the values in the array are truthy

----

### each

<prism language='ruby'>
  irb(main)> new_arr = []
  irb(main)> arr = [1,2,3]
  irb(main)> arr.each do |x|
  irb(main)> 	new_arr << x += 10
  irb(main)> end
  => [1, 2, 3]
  irb(main)> new_arr
  => [11, 21, 31]
</prism>

This method iterates over each item in the array executing a block of code on
each item. It also returns the original array.

----

### map

<prism language='ruby'>
  irb(main)> arr = [1,2,3]
  irb(main)> arr.map { |x| x += 10 }
  => [11, 21, 31]
</prism>

This method iterates over each item in the array executing a block of code on
each item. Unlike the each method, this method returns an array with the values
updated, if the values were modified within the block of code passed to it. You
can make permanent changes to the original array by using a '!'.
