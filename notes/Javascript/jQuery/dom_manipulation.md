---settings

title: DOM Manipulation

---settings


### `.html()`

```js
  $("h1").html("<div>Super Dooper</div>");
```

The `.html()` function is used to change the HTML contents of an element. In the
example above, all h1 elements on the page will have a `<div>` inside of them with
the text `Super Dooper` inside of the `<div>`.

### `.text()`

```js
  $("h1").text("Super Dooper");
```

The `.text()` function is used to change the text contents of an element. In the
example above, all h1 elements on the page will have the text `Super Dooper` 
inside of them.
