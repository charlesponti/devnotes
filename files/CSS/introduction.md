---settings

title: Introduction

---settings

![CSS](http://cscie12.dce.harvard.edu/lecture_notes/2010/20100303/images/wordle-css.png)

Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to style web pages and interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL.

CSS is designed primarily to enable the separation of document content from document presentation, including elements such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple pages to share formatting, and reduce complexity and repetition in the structural content (such as by allowing for tableless web design).

CSS can also allow the same markup page to be presented in different styles for different rendering methods, such as on-screen, in print, by voice (when read out by a speech-based browser or screen reader) and on Braille-based, tactile devices. It can also be used to allow the web page to display differently depending on the screen size or device on which it is being viewed. While the author of a document typically links that document to a CSS file, readers can use a different style sheet, perhaps one on their own computer, to override the one the author has specified.

CSS specifies a priority scheme to determine which style rules apply if more than one rule matches against a particular element. In this so-called cascade, priorities or weights are calculated and assigned to rules, so that the results are predictable.

The CSS specifications are maintained by the World Wide Web Consortium (W3C).

## Defining a rule
```
body {
  color: black;
}
```

## Selectors
* `*` All elements
* `#X` targets all elements with a id of X
* `.X` targets all elements with a class of X
* `X Y` targets any Y element inside of any X element


## Fonts

```
body {
  font-family: Helvetica;
}
```

* **Web Safe Fonts**

  * **Serif Fonts**
    * Georgia, serif
    * "Palatino Linotype", "Book Antiqua", Palatino, serif
    * "Times New Roman", Times, serif

  * **Sans-Serif Fonts**
    * Arial, Helvetica, sans-serif
    * "Arial Black", Gadget, sans-serif
    * "Comic Sans MS", cursive, sans-serif
    * Impact, Charcoal, sans-serif
    * "Lucida Sans Unicode", "Lucida Grande", sans-serif
    * Tahoma, Geneva, sans-serif
    * "Trebuchet MS", Helvetica, sans-serif
    * Verdana, Geneva, sans-serif

  * **Monospace Fonts**
    * "Courier New", Courier, monospace
    * "Lucida Console", Monaco, monospace

* **font-weight** declared as a number between 100 and 900; the higher the number, the more bold the text will be.

## Size

* **Pixel**
  * Example: 10px
  * Number of pixels the element will take up

* **Percentage**
  * Example: 10%
  * Percentage of the parent element
    * **NOTE:** If you are defining the width or height of an element in percentage, its parent element must have it's width or height set.

* **EM**
  ```
  body {
    font-size: 1em;
  }
  ```
  * 1em is equal to the default font size of the webpage ( usually 16px )

## Box Model

* **padding**

  Declares how much whitespace there will be between the content inside of a element and the elements border

  ```
  padding: 20px; /* 20px padding to all four sides */
  ```

  ```
  padding: 5px 10px; /* 5px padding to top and bottom & 10px padding to left and right */
  ```
  ```
  padding: 5px 10px 6px; /* 5px padding to top, 10px padding to left and right, 6px padding to bottom */
  ```
  ```
  padding: 5px 10px 6px 12px; /* 5px padding to top, 10px padding to right, 6px padding to bottom, 12px padding to left */
  ```

* **margin**
  ```
  p {
    margin: 50px;
  }
  ```

  * Declares how far away from other elements the element will be.
  * To horizontally center an element within it's parent element, use:
  ```css
  .element {
    margin: 0 auto;
  }
  ```

* NOTE: Both of margin and padding can be defined in either pixels, percentage, or em

## Color

* **Name**
  ```
  p {
    color: red;
  }
  ```
  * There are 140 named colors in CSS, such as `red`,`blue`,`cyan`, etc.

* **rgb**
  ```css
  .classname {
    color: rgb(0,0,0)
  }
  ```

  * This is three number representation of colors. The first number is for red, the second is for green, and the third is for blue. Each number can go from 0 to 255. The larger the number, the more that color will be represented.

* **rgba**
  ```css
  .classname {
    color: rgba(0,0,0,0.8)
  }
  ```

  * Same as RGB, except it provides the input of a fourth number that represents the transparency of the color.

* **HEX**
  ```
    div.hero {
      background-color: #FF00FF;
    }
  ```
  * Six-digit, three-byte hexadecimal number used in HTML, CSS, SVG, and other computing applications, to represent colors. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation), or 0 to 255 in decimal notation. This represents the least (0) to the most (255) intensity of each of the color components

## Background
* For a color:
  ```
  .classname {
    background-color: red;
  }
  ```

* For an image:
  ```
  .classname {
    background: url(path/to/image);
  }
  ```

* To stretch background to the size of the user's browser window, use:
  ```
  .classname {
    background-size: cover;
    background-attachment: fixed;
  }
  ```

## Positioning and Type
* **display** specifies the type of box used for the element

* **position**
  * **static** default for elements
  * **relative** positions an element relative to its parent
  * **absolute** positions an element in one area of the page, or the first parent element whose position is set to relative, and sits on top of all other items. It can sit below other items by changing it's z-index.
  * **float** pushs an element left or right and allows other elements to wrap around them
  * **clear** specifies which sides of an element where other floating elements are not allowed

* **cursor** change this property if, for example, you wanted the cursor to be a pointer instead of the default arrow icon

## Tools:

* **ColorPicker.com** Allows you to pick any color, providing both the HEX and RGB codes

* **Normalize.css** A open-source css file that normalizes css properties across browsers and fixes some styling quirks.

## Reference Sites
* **CSS-Tricks.com** CSS Tutorials

## Best Practices
* Put element rules in the same order that the elements appear in the HTML
