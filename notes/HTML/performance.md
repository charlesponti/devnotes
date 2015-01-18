## Performance  
  
### Web Timing  
  
#### Navigation Timing  

```js
  var timing = performance.timing
  var startTime = timing.navigationStart
  // Supported by Chrome 6+, IE9+, Firefox 7+, Android 4+
```

Navigation timing allows developers to track performance metrics of their site by tracking events in the browser.

#### User Timing

User timing is a valuable resource for developers that are creating Web 2.0 web sites, such as applications that make heavy use of AJAX for updating.

#### Resource Timing

* DNS, redirects, etc.
* Security safeguards

### Page Visibility

```js
    document.webkitHidden
```

Page visibile will help developers determine when and for how long their page is actually visible to the user. This is useful for sites that user's will keep open even when they are not actively using it, such as how many users will keep their Facebook page or GMail account open in tabs throughout the whole day and will switcha back to them from time to time for updates.

One practical example for why developers may want to track when the page is actually visible to the user is a slideshow. Imagine you have built a site that is showcasing images in a slideshow. You will not want to progress through the photos if the slideshow is not visible to the user because, if you do, they will miss out on content that you were intending on them seeing.

### Script Loading

JavaScript is an indispensible resource for most web sites and web applications today. One rather large issue with this, however, is that all browsers will halt parsing and rendering of a web page once it encounters a ``<script>`` tag. 

#### async

One way of getting around this, is to use the **async** attribute on the ``script`` tag, like so:

```html
    <script src="/foo/bar.js" async></script>
```

This will tell the browser to fetch the JavaScript resource and to continue parsing and rendering the web page. Once the resource has been downloaded, the script will execute.

#### defer

Another option is to use the **defer** attribute:

```html
    <script src="/foo/bar.js" defer></script>
```

This will tell the browser to fetch the resource, continue parsing and rendering the page, and to execute the script after the page has been fully loaded. ``<script>`` tags with the **defer** attribute will be executed in the order in which they are listed in our HTML. This can be really useful if you have resource that depend on other resources to have been loaded, such as some code that requires jQuery to have been loaded before it can execute.

#### Gzip/Compression/Minification

Along these same lines, it is also a best practice to use **gzip** and other compression methods, such as **minification** and **uglification**, to make the size of your resources smaller so that they can be downloaded faster.

