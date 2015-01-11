## The Box Model

The box model in CSS works like this:

<blockquote>
  **actual width** = width + border + padding
  <br/>
  **acutal height** = height + border + padding
</blockquote>

Due to the way the box model works, most people get unexpected results
when adding padding or borders to child block-level elements, such as
having content cut out or cut into. For this reason, many people use an
approach that has been popularised by Paul Irish:

<prism language='css'>
  html {
    box-sizing:         border-box;
  }
  *, *:before, *:after {
    box-sizing:         inherit;
  }
</prism>

Previously one would have added <span class="highlight"> box-sizing: border-box </span>
to all, <span class="highlight">*</span>, elements, but this approach
did not lend itself well to allowing components to change.

<h2> Flow </h2>

<p>
Boxes in the normal flow belong to a formatting context, which may be block or inline, but not both simultaneously. Block boxes participate in a block formatting context. Inline boxes participate in an inline formatting context.
</p>

<p>
<h3> Block Formatting Context </h3>
Block formatted elements flow vertically within their container box.
Their left outer edge touches the left edge of their container regardless
of float.
</p>

<p>
<h3> Inline Formatting Context </h3>
Inline formatted elements flow horizontally across their container box.
A box that contains inline elements is usually referred to as a line box.
</p>
