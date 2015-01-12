## SCMACSS

### Scalable & Modular Architecture CSS

SCMACSS is style guide based on a way of examining your design process and having
a more flexible thought process surrounding how your sites styles are crafted.
At the core this methodology is categorisation of CSS rules into five main types:

* Base
* Layout
* Module
* State
* Theme

## Rules

### Base Rules

```css
  html, body {
    margin: 0;
    padding: 0;
  }

  a {
    color: #039;
  }
```

Base rules are the defaults for single element, attribute, pseudo-class, child,
or sibling selectors. Essentially, a base rule dictates that wherever that element
is, it will look like *this*.

### Layout Rules

Layout rules divide the page into sections and hold one or more modules together.

### Modules

Modules are reusable parts of your design. They can be list items, navigation
sections, sidebars, paragraphs, etc.

### State Rules

State rules are used to describe how modules or layouts will look when in a
particular state, such as "how will the list item look when the user is  hovering
over it?". They can also describe how these modules will look when on different
sections of your website.

### Theme Rules

Theme rules describe how modules or layout will look.

## Naming Rules

```css
  /* Example Module */
  .example {

  }

  /* Caption element within Example Module */
  .example-caption {

  }

  /* Example Module in hidden state */
  .example.is-hidden {

  }

  /* Inline layout */
  .l-inline {

  }
```

Having a naming convention is beneficial for understanding what a particular
style belongs to and its role within the overall scope of the site's design.
