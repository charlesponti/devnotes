## Media Queries

```css
  .my-class {
    background: red;
  }

  @media screen and (min-width: 768px) {
    .my-class {
      background-color: yellow;
    }
  }
```

**Media Queries** are used to adjust the style of an element size of viewport or device that the content is being viewed on. It's a best practice to use media queries, not at predetermined widths, but rather at the point at which the design “breaks” and warrants adjustment.

In designing any site, the first step should be determining the layout that provides the best usability. You can use the developer tools in most modern browsers, such as Chrome and Firefox, to see at what size the layout fails to render properly. At those points, the next step is to determine how you can adjust the layout to render properly while maintaining the same high level of usability.
