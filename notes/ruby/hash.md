# Hash

```ruby
irb(main)> hash_name = { president: 'Barack Obama' }
=> 'Barack Obama'
```

A hash table (also hash map) is a data structure used to implement an
associative array, a structure that can map keys to values. A hash table uses
a hash function to compute an index into an array of buckets or slots, from
which the correct value can be found.

## Accessing Values

```ruby
irb(main)> hash_name[:president]
=> 'Barack Obama'
```

The values inside of a hash are accessed using the keys as symbols.

## Adding values

```ruby
irb(main)> hash_name['first_lady'] = 'Michelle Obama'
=> { president: 'Barack Obama', first_lady: 'Michelle Obama' }
```
