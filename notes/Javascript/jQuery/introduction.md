---settings

title: Introduction to jQuery

---settings

## jQuery

```js
$(function() {
  /* When the page has finished loading, execute the code in this function */
})
```

* calls to jQuery functions can begin with either $ or jQuery

* works "cross-browser", though newer versions of jQuery will be dropping support for Internet Explorer 6 & 7

* Allows:
  * DOM traversal
  * CSS manipulation
  * Event handling
  * XHR requests
  * Animation
  * and more!

* **Change CSS**

```js
  $('h1').css({
    color: 'red'
  });
  /* this will set the color of all h1s to red */
```

* **Attach events to elements**

```js
  $('h3').click(function(event) {
    $(this).hide();
  });
  /* When a h3 is click, it will get hidden */
```

You can attach an event to one element and manipulate anything on the page within the callback function. If an element has a default event that gets executed on a specific event, such as how `<a>` tags will open a webpage when they are clicked, you can include event.preventDefault() within the callback function to disable that default behaviour.
