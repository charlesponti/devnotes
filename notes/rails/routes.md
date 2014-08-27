# Routes

```ruby
Rails.application.routes.draw do 
    
    root "games#index"

end
```

Routes handle directly incoming requests to controller methods that will handle
the request and return a response to the client.

In the above example, `root` defines what controller method will be used to 
handle requests to the root url of your application. Let's say that your 
application was being serve from the domain 'http://www.meow.com'. The root 
url would be 'http://www.meow.com/'.

## Defining Routes

```ruby
    get "/cats", to: "cats#index", as: :cats
```

In Rails, there is a convention about how routes are defined. Let's dissect the
example above to determine what each piece means. Let's also assume again that
your application is being served from 'http://www.meow.com'.

```ruby
    get "/cats"
```
1. The first thing that must be defined in a route is the HTTP verb and url 
that this route declaration will handle. The above example will handle all GET
requests to 'http://www.meow.com/cats'.

```ruby
    to: "cats#index"

    # Handled by:
    # def CatsController < ApplicationController
    # 
    #   def index
    #       @cats = Cats.all
    #   end
    # 
    # end
```
2. The second part that must be defined in a route is which controller method 
will be used to process the request. In the above example, all GET requests to
'http://www.meow.com.cats' will be handled by the index method within the 
CatsController.

```ruby
    as: :cats
```
3. The last part that must be defined in a route is optional. This will define
a helper method that can be used throughout the application. For instance, if 
you wanted to create a link to this route in a view you can write:

```ruby
    <%= link_to "Cats", cats_path %>
```
