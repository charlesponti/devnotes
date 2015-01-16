# Animation

<iframe height='350' scrolling='no' src='//codepen.io/theponti/embed/LEWMXJ/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/theponti/pen/LEWMXJ/'>LEWMXJ</a> by CJ Ponti (<a href='http://codepen.io/theponti'>@theponti</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

CSS Animations allow an element to be transitioned from one style configuration
to another.
It is important to note that not all CSS properties can be animated or
transitioned, such as **display**. You can see an up-to-date list here:
[CSS Animatable Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## Properties

```css
  .my-animate-element {
    animation-name: none;
    animation-duration: 0s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
  }
```

* **animation-delay**  
  Configures the delay between the time the element is loaded and the beginning
  of the animation sequence.

* **animation-direction**  
  Configures whether or not the animation should alternate direction on each run
  through the sequence or reset to the start point and repeat itself.

* **animation-duration**  
  ```css
  .my-duration {
    animation-duration: 3s;
  }
  ```
  Configures the length of time that an animation should take to complete one
  cycle.

* **animation-iteration-count**  
  ```css
    .my-iteration-count {
      animation-iteration-count: infinite;
      animation-iteration-count: 3;
      animation-iteration-count: 2.3;
      animation-iteration-count: 2, 0, infinite;
    }
  ```
  Configures the number of times the animation should repeat; you can specify
  infinite to repeat the animation indefinitely.

* **animation-name**  
  Specifies the name of the @keyframes at-rule describing the animation's
  keyframes.

* **animation-play-state**  
  Lets you pause and resume the animation sequence.

* **animation-timing-function**  
  Configures the timing of the animation; that is, how the animation transitions
  through keyframes, by establishing acceleration curves.

* **animation-fill-mode**  
  Configures what values are applied by the animation before and after it is
  executing.
