# HTML

```html
<!doctype html> <!-- indicates that this document is using HTML5 -->
<html>
  <head>
    <!-- Metadata goes here -->
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

HTML or HyperText Markup Language is the main markup language for creating web pages and other information that can be displayed in a web browser.

HTML is written in the form of HTML elements consisting of tags enclosed in angle brackets (like ``<html>``), within the web page content. HTML tags most commonly come in pairs like ``<h1>`` and ``</h1>``, although some tags represent empty elements and so are unpaired, for example ``<img>``. The first tag in a pair is the start tag, and the second tag is the end tag (they are also called opening tags and closing tags). In between these tags web designers can add text, further tags, comments and other types of text-based content.

The purpose of a web browser is to read HTML documents and compose them into visible or audible web pages. The browser does not display the HTML tags, but uses the tags to interpret the content of the page.

HTML elements form the building blocks of all websites. HTML allows images and objects to be embedded and can be used to create interactive forms. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. It can embed scripts written in languages such as JavaScript which affect the behavior of HTML web pages.

## The DOM

* Document Object Model

* The browser constructs this "tree" of the HTML elements on the page upon load.

* If the DOM is changed via JS, the changes are reflected instantly without page refresh. This includes new/removed elements, attributes, and stylesThis is frequently used for notifications and updating the DOM to reflect new data, such as how GMail notifies you that you have a new email without having to refresh the page.

## Elements
```html
  <tagname> content </tagname>
```

### Head
```html
  <head>
    <title> Meowcakes! </title>
  </head>
```

The HTML <head> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets.

### Content Tags

* ``<ul>`` Unordered list (list with bullets)
* ``<ol>`` Ordered list (list with numbers)
* ``<li>`` List item ( used within ul and ol elements )
* ``<em>``  Renders as emphasized text
* ``<strong>`` Defines important text
* ``<dfn>`` Defines a definition term
* ``<code>`` Defines a piece of computer code
* ``<samp>`` Defines sample output from a computer program
* ``<kbd>`` Defines keyboard input
* ``<var>`` Defines a variable
* ``<img>`` Used to insert image
* ``<a>`` Used to insert a clickable link

```html
  <a href="url">  Link Text </a>
```

* ``<link>`` Primarily used to include a CSS file

```html
  <link rel="stylesheet" href="path/to/css/file"/>
```

* ``<script>`` 

```html
  <script src="path/to/js/file"></script>
```
The script tag is used to either include a JS file or insert JS code directly into the html document. Javascript files are commonly included at the bottom of the `<body>` section of the HTML document so that the page can render and user can begin interacting with the webpage before the JS files need to be downloaded.

#### Classes and Ids
```html
<tagname class="classname"> content </tagname>
<tagname id="idname"> content </tagname>
```

Classes and ids are attributes of an HTML element. They are used to differentiate elements from each other, which comes in very handy when defining styles in CSS and behaviours in JavaScript. It is recommended to use classes for defining styles in CSS and ids for referencing that element in JavaScript.

## Best Practices
* Keep nested elements indented one tab in comparison to their parent element
* Build as much of the HTML for a page as possible before attempting to style it.