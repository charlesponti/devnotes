# Models

The models of your application are representations of the data of your application. In Rails, they are instances of ActiveRecord::Base.

To create a new model:

```
$ rails generate model Post
```

This command will create a new file with a model template in the app/models folder.

## Validation

```ruby
class Book
    validates :title, presence: true
end

Book.create(author: 'Dr.Meowingtons').valid? #=> false
Book.create(title: 'Meowcakes', author: 'Dr.Meowingtons').valid? #=> true
```

Validations are used to validate the attributes of a model instance upon save and update.

To see a full list and explanation of all the possible options you can validate a model instance with, see [Rails Validations](http://edgeguides.rubyonrails.org/active_record_validations.html)
## Methods

### new
```
Book.new title: 'Meowcakes', author: 'Dr.Meowingtons', year: 4444
```

This method creates a new instance of the model.

### create
```
Book.create title: 'Meowcakes', author: 'Dr.Meowingtons', year: 4444
```
This method creates a new instance of the model and saves a new record in the database.

### all
```ruby
Book.all 
# [{"title" => "Meowcakes", "author" => "Dr.Meowingtons", "year" => 4444 }]
```
This method returns an array containing all the instances of class saved in the database.

### find
```ruby
Book.find 1 
# {"title" => "Meowcakes", "author" => "Dr.Meowingtons", "year" => 4444 }
```

This method takes an integer and will return the record in the database that has that integer as its id.

### where
```ruby
Book.where "id < 17"
# This method will return all of the records whose id is less than 17
```

This method takes a string to search the database table by.

### select
```ruby
Book.select(:title, :id).where("id < 17") 
# { id: 1, title: 'Meowcakes'}
```

This method is used to select the columns of the table that you want returned, this way the response will not be full of columns that you don't need.

### changes
```ruby
Book.changes
```

This method will return all the changes made to instances of the class that have not yet been persisted the database

### attribute_names
```ruby
Book.attribute_names 
# ['title', 'author', 'year']
```

This method returns all of the columns of the table for the model.

### order
```ruby
Book.order('created_at DESC')
```

This method is used to decide the order you want the response of a database query to be returned in.

## Instance Methods

```ruby
book = Book.new title: 'Meowcakes', author: 'Dr.Meowingtons', year: 4444
```

### save
```ruby
book.save
```

This method will save the record to the database. This can be used on a newly instantiated instance of a class or on an existing one that has unsaved changes.

### destroy
```ruby
book.destroy
```

This method destroys that instance of the class and removes the record from the database.

### update_attributes

```ruby
book.update_attributes({ title: 'Meowcakes 2', author: 'Dr.Meowingtons III' })
```

This method will update the attributes of the instance passed in the hash and save the changes to the database.

