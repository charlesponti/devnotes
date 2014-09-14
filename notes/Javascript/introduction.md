# Javascript

JavaScript (JS) is a dynamic computer programming language.[5] It is most commonly used as part of web browsers, whose implementations allow client-side scripts to interact with the user, control the browser, communicate asynchronously, and alter the document content that is displayed. It has also become common in server-side programming, game development and the creation of desktop applications.

JavaScript is a prototype-based scripting language with dynamic typing and has first-class functions. Its syntax was influenced by C. JavaScript copies many names and naming conventions from Java, but the two languages are otherwise unrelated and have very different semantics. The key design principles within JavaScript are taken from the Self and Scheme programming languages. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.

The application of JavaScript to use outside of web pages—for example, in PDF documents, site-specific browsers, and desktop widgets—is also significant. Newer and faster JavaScript VMs and platforms built upon them (notably Node.js) have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript was traditionally implemented as an interpreted language but just-in-time compilation is now performed by recent (post-2012) browsers.

## How does it work?

* **Prototypical** Javascript does not have classes, so instead it uses functions that can be reproduced with the 'new' keyword (Ex. var x = new Person()) and can be extended with new properties with the '.prototype' function (Ex. Person.prototype.hairColor = 'black')

* **Linear** One process happens one after another, line by line

* **Storage** JavaScript programs run in memory and can access different types of local storage that exists within the user's browser

## Adding JavaScript to a webpage

```html
<script src="path/to/js/file"></script>
```

* It is best to never include JavaScript directly into your HTML page within <script></script> tags. You should instead have a seperate .js file with your JavaScript code and include them into you web page like this:

* It is recommended to include your JavaScript files at the bottom of the <body> section of your HTML document, as it allows the user to view the page while the JS files are being loaded. It also may be necessary if parts of your JS needs an element on the page to be present in order to attach an event listener to it.

## Variables

```
var x = 'Meowcakes!';
```

* used to store values, which can be strings, arrays, objects, functions, or boolean values

* You can also declare a variable without an initial value for later use

```
var x;
```

## Converting values

* **String -> Number**

```js
  parseInt('42') 
  /** returns 42 */
```
* Strings that only have integers at the beginning of them, such as '42', can be converted to a number using parseInt()


* **Number -> String**

```js
  42.toString(); 
  /** returns '42' */
```

## Conditionals

* **if/else**

```js
var x = 5;

if (x === 5) {
  /* do stuff */
} else {
  /* do something if x is not equal to 5 */
}
```

* **if/else if/else**

```js
var username = 'Kathy';

if (username === 'Sandy') {
  /* do stuff */
} else if (username === 'Kathy') {
  /* do something else */
} else {
  /* do something of username is not equal to 'Sandy' or 'Kathy' */
}
```

## Web API

* **alert**

```js
  alert("Foo Bar");
```

* **console.log**

```js
  console.log("Hello World");
  /** Print "Hello World" to dev console */
```

* **prompt**

```js
  var userAge = prompt('What is your age?')
```

* Will present a alert window with a text field. The value that user inputs into the textfield will be attributed to the variable. In the above example, after the user enters a value and pressing 'Ok', userAge will be equal to whatever the user inputs.
