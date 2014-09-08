# Maps

```go
var my_map = make(map[string]int)
my_map["cat"] = "Mr.Meow"
```

A map is an unordered collection of key-value pairs. Also known as an
associative array, a hash table or a dictionary, maps are used to look up a
value by its associated key.

## Retrieving a value

```go
my_map["cat"] // "Mr.Meow"
```

## Deleting a value

```go
delete(my_map, "cat")
```

## Shorthand

You can also declare maps like so:

```go

  elements := map[string]string{
      "H": "Hydrogen",
      "He": "Helium",
      "Li": "Lithium",
      "Be": "Beryllium",
      "B": "Boron",
      "C": "Carbon",
      "N": "Nitrogen",
      "O": "Oxygen",
      "F": "Fluorine",
      "Ne": "Neon",
  }

```
