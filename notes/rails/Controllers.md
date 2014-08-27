# Controllers

```ruby
class BooksController < ApplicationController

	def index
		@books = Book.all
	end

	def new
		@book = Book.new
	end

	def create
		@book = params[:book]
		if @book.save
			redirect_to @book
		else
			render :new
		end
	end
	
	def show
		@book = Book.find params[:id]
	end

	def destroy
		@book = Book.find params[:id]
		if @book.destroy
			redirect_to :index
		else
			/* Do something else */
		end
	end

end
```

The controllers of your application link your business logic to the views. The methods that handle requests to your application are defined within your application's controllers.

In Rails, the base controller for a Rails application is ApplicationController which inherits from ActionController::Base. All other controllers that you create will inherit from ApplicationController, as seen in the BooksController above.

## Filters
```ruby
before_filter :authenticate_user, only: [ :index, :edit ]
```

Filters are used for executing methods either before or after a controller method is executed. This is most commonly used when authenticating a request so unauthorized users cannot access certain parts of your web application.
