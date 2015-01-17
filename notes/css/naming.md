## Naming

The key to properly choosing class names is to be as meaningful, flexible, and
reusable as possible. A developer should be able to look at a class name and
know exactly what is being accomplished.

## Selectors

### Keep selectors short
When selectors are used, whether they are using HTML elements, class names,
or ids, the browser has to search the current state of the DOM for any style
that may apply. The most nested the selector, the more effort the browser must
make to find the appropriate elements and apply the appropriate styles.

```css
/* Bad */
button span a {

}

/* Good */
button a {

}
```

### Favor Classes
For the reason stated above, using declarative class names over nested selectors
will yield a much better performance gain and make your HTML more easy to
comprehend.

```css
/* Bad */
button a {

}

/* Good */˜
.btn-link {

}
```

## Specificity

Specificity has long been a point of contention in the world of CSS
development. It causes issues when determining the appropriate methodology
when writing styles, while also causing issues when debugging styles in the
browser.

You will no doubt find yourself at some point saying, "I don't understand. I
totally styled that element! Why aren't my styles showing up!?", only to
realise that your styles were being overridden by a more specific rule.

### Tips for dealing with specificity

* **Never use IDs in CSS, ever.**  
They have no advantage over classes (anything you can do with an ID, you
can do with a class), they cannot be reused, and their specificity is way,
way too high. Even an infinite number of chained classes will not trump
the specificity of one ID.

* **Do not nest selectors unnecessarily.**  
If .header-nav {} will work, never use .header .header-nav {}; to do so
will literally double the specificity of the selector without any benefit.

* **Do not qualify selectors unless you have a compelling reason to do so.**  
If .nav {} will work, do not use ul.nav {}; to do so would not only limit
the places you can use the .nav class, but it also increases the specificity
of the selector, again, with no real gain.

* **Make heavy use of classes**  
Classes are the ideal selector: low specificity (or rather, all classes
have the same specificity, so you have a level playing field), great
portability, and high reusability.
