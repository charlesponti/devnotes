# Rails

Ruby on Rails, often simply Rails, is an open source web application framework which runs on the Ruby programming language. It is a full-stack framework: it allows creating pages and applications that gather information from the web server, talk to or query the database, and render templates out of the box. As a result, Rails features a routing system that is independent of the web server.

Ruby on Rails emphasizes the use of well-known software engineering patterns and principles, such as active record pattern, convention over configuration (CoC), don't repeat yourself (DRY), and model–view–controller (MVC).

## Routes

Routes define which controller and which method should be called when a user accesses a certain url. In Rails, routes are defined in the `config/routes.rb` file.

To define a route:

```
get "/books" => "books#index"

httpverb "url" => "controller_name#method_name"
```

To define a dynamic route with a param in the url:

```
get "/books/:id" => "books#show"

/**
 * This route makes a key in the params hash named id 
 * available in the show method within the BooksController as seen
 * in the controller example above.
 */
```

To define the root route:

```
root "controller_name#method_name"
```

**Note** There is precedence in the routes file.
Let's say you had a url to show a book and a url to create a book defined like so:

```
get '/books/:id' => 'books#show'
get '/books/new' => 'books#new'
```

This configuration will raise an error because when the user navigates to '/books/new', Rails is going to interpret the show route before the new route. This means that your application will attempt to search the Books table for a book that has an id of 'new', which it will not find. The proper configuration would be:

```
get '/books/new' => 'books#new'
get '/books/:id' => 'books#show'
```



## REST

REST stands for Representational State Trasfer. It is an architectural style consisting of a coordinated set of constraints applied to components, connectors, and data elements, within a distributed hypermedia system. REST ignores the details of component implementation and protocol syntax in order to focus on the roles of components, the constraints upon their interaction with other components, and their interpretation of significant data elements.

## CRUD

CRUD stands for Create, Read, Update, and Delete. These are the four basic functions of persistent storage. The data of your application, and the applications that your data interacts with, is created, read, updated, and deleted. This matches HTTP verbs:

Create -> POST
Read -> GET
Update -> PUT
Delete -> DELETE

## Rake

Rake is a Ruby task manager. You will use it to execute tasks such as database migrations. Rails itself comes with many task preloaded common for managing a Rails application. You can also create your own tasks.

You can run `rake -T` to see all of the available tasks in the current environment.

## Commands

### rails new

```
rails new project_name
```

This command will create a new Rails application, installing the Rails boilerplate into a directory with the same name of the project name you pass to it.

### rails server or rails s

```
rails server
```

This command starts the rails server. By default, the server will run on port 3000.

This command must be executed while you are inside the main directory of your Rails application.

### rails generate or rails g

```
rails generate scaffold Post title:string content:string
```

This command will generate a resource of the type you pass to it. The types of resources can be model, controller, view, scaffold, etc.

### rails destroy or rails d

```
rails destroy scaffold Post title:string content:string
```

This command will destroy any files that were created during a processed migration.

#### scaffold

Running `rails generate scaffold ...` will generate a model, controller, views, database migration file, and other files with the name and attributes you pass to it.

## Time

### hours, weeks, minutes, etc. with since & ago

```
5.hours.ago
5.minutes.ago
5.weeks.ago
5.hours.since(5.weeks.ago)
```
These methods are used in conjuction with the since and ago methods to return a Time instance representing how far in the past or future you want the instance to be set to.


