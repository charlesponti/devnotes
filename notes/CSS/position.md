---settings

title: Position
categories: Zoom

---settings

### Static

```css
  p {
    position: static;
  }
```

Static positioning is the default positioning value for HTML elements and causes the elements to static on.

### Relative

```css
  div {
    position: relative;
  }
```

Relative positioned elements behave in the exact same way as staticly positioned elements, but this setting allows the element to be offset by top, right, bottom, and left properties. It also allows its children to position themselves relative to it.

### Absolute

```css
  div {
    position: absolute;
  }
```

An absolute positioned element is removed from the normal flow of the document and can be place anywhere on the DOM.

### Fixed
```css
  div {
    position: fixed;
  }
```

### inherit
```css
  div: {
    position: inherit;
  }
```