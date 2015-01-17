# Media Queries

```css
  .my-class {
    background: red;
    
    @media screen and (min-width: 768px) {
      background-color: yellow;
    }
  }
```

**Media Queries** are used to adjust the style of an element depending on the
the device being the content is being viewed on and at what size the viewport or
device is. It is important to note that these queries should be used, not at
predetermined widths, but rather at the point at which the design “breaks” and
warrants adjustment.
