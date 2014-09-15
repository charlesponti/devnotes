---settings

title: Templates

---settings

```js
	// Underscore template
	var template = _.template("<h1> Hello <%= name %> </h1>")

	// This will render an h1 element with the text 'Hello World'
	template.render({ name: 'World' });
```

Templates are reusable HTML markup that are used to render data that is 
passed to them. These templates normally include all the styles and 
hierarchy that is needed to render a specific set of keys but with different 
values. Used in combination with Backbone views, they are great for iterating 
over a Backbone collection of models to display a list of data for some purpose.

