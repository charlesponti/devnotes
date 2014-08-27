# Views

The views of your application hold the HTML that will be rendered in the user's browser.

## ERB

ERB is a templating language that allows developers to include Ruby code into the template. When a user accesses a route that requires the template file, the server will preprocess the template, executing the Ruby code within it to return the user properly formatted HTML.

The syntax for injecting Ruby code into a .erb file is:
```
<% /** Ruby code goes here */ %>
```

The syntax for injecting Ruby code that you want printed to the screen is:
```
<%= /** Ruby code to get printed to users' screen */ %>
```

### Iterating

Let's say you had three books saved in your database and you defined a @books variable in the controller responsible for this view that is equal to those books.

You could list all of the books like so:
```
<% @books.each do |book| %>
    <h1><%= book.title %></h2>
    <p><%= book.content %></p>
<% end %>
```

### Links

```
<%= link_to book.title, book %>

/** 
 * This code will inject an achor tag into the generate HTML 
 * file with the href equal to the url that will show the book, such as:
 * 
 * <a href='/books/1'>The Kitty Cat Rules The Day</a>
 */

```

### Forms

```
<%= form_for @book do |f| %>
    <%= f.label :title %>
    <%= f.text_field :title %>

    <br/>

    <%= f.label :content %>
    <%= f.text_area :content %>

    <br/>

    <%= f.submit %>
<% end %>
```

```
<%= form_tag '/urls', method: 'get', remote: true, multipart: true do |f| %>
    /** form fields*/
<% end %>
```

#### 
* **method** This defines the HTTP method executed when submitted the form. You can only use GET and POST requests on HTML forms.
* **remote** This defines whether the form should be submitted via an AJAX request, allowing you to submit the form without reloading the page or redirecting to a new page.
* **multipart** This defines whether or not there will be media items submitted with the form, such as images, music, or a video.

### Flash Messages

```
flash[:error] = "Username and password do not match."
```

Flash messages are defined within controller methods and are rendered to the view associated with that method upon render. You can assign as many keys to the flash object as you need. You only have to ensure that the symbol you assign is the same used within the view for it to be rendered.

#### now
```
flash.now[:info] = "New book created."
```

This method is used when rendering a view, while the standard method of using flash is only implemented upon redirect.
