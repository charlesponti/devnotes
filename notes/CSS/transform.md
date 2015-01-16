# Transform

<iframe height='350' scrolling='no' src='//codepen.io/theponti/embed/VYpqRg/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/theponti/pen/VYpqRg/'>VYpqRg</a> by CJ Ponti (<a href='http://codepen.io/theponti'>@theponti</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

The **transform** property allows you to mutate an element on both a 2D and 3D
plane. Two-dimensional transforms allow an element to be mutated on its x and
y axis, while three-dimensional transforms allows an element to be mutated on
its x, y, and z axis.

## Translate

```css
.translate-left {
  transform: translateX(-10px);
}
.translate-down {
  transform: translateY(10px);
}
.translate-diagonal {
  transform: translate(10px, 10px);
}
```

**translate** operates much like relative positioning. This transform will move an
element up, down, left and right from it's original position without effecting
the flow of the document. You can use **translateX** to move the element an element
left or right, **translateY** to move an element up or down, and **translate** to
translate the element on both its x and y axis.

## Rotate

```css
.rotate-it {
  transform: rotate(30deg);
}
```

**rotate** is used, as you may have guessed, to rotate an element.

<iframe height='350' scrolling='no' src='//codepen.io/theponti/embed/dPvwmq/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/theponti/pen/dPvwmq/'>dPvwmq</a> by CJ Ponti (<a href='http://codepen.io/theponti'>@theponti</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
