# CSS

## Normal Flow
Boxes in the normal flow belong to a formatting context, which may be block or inline, but not both simultaneously. Block boxes participate in a block formatting context. Inline boxes participate in an inline formatting context.

**Block Formatting Context**
Block formatted elements flow vertically within their container box. Their left outer edge touches the left edge of their container regardless of float.

**Inline Formatting Context**
Inline formatted elements flow horizontally across their container box. A box that contains inline elements is usually referred to as a line box.

## BEM (Block Element Modifier)
```
.signup_form-email {
	/* styling for email input */
}
```
A structured way of naming classes that is based on the properties of the element

## SMACSS (Scalable/Modular Architecture for CSS)

## Box-sizing
```
*, *:before, *:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
```

## Clearfix

```
.clearfix:before, .clearfix:after {
	content: ' ';
	display: table;
}

.clearfix { zoom: 1; }
```