## AppCache

**index.html:**
```html
    <!doctype html>
    <html manifest="myapp.appcache">
```

**Manifest file:**
```
    CACHE MANIFEST
    # Revision: 1.0.0

    CACHE:
    /images/cats.jpg

    NETWORK:
    /signup.js

    FALLBACK:
    /index.html /offline.html
```

App Cache is a tool used for building sites and applications to perform during offline usage. It can be used for caching your site's resources, such as images, scripts, stylesheets, etc. A manifest file must be served in order for the browser to know how to handle the web page's application cache. This manifest file consists of four parts:

* **CACHE MANIFEST**  
  This will tell the browser what version of the manifest it should use. If the version number is the same as the one the browser already has, it will follow what is dictating in the current manifest file it has stored. If the version number is different, the browser will dump the cache for the site and start over with what is dictated in the new manifest file.
* **CACHE**  
  This will be a list of resources that the developer will want the browser to cache. Here you will want to list images that aren't likely to change between revisions, favicons, fonts, etc.
* **NETWORK**  
  This will also be a list of resources, but these will be ones that the developer **does not** want the browser to cache. This usually includes the certain resources that should be refetched and executed every time the site is loaded.
* **FALLBACK**  
  This will be list of resource pairs. If the user is online then the first resource will be served, otherwise the adjacent resource will be served.

#### App Cache Pitfalls
* HTML documents with the **manifest** attribute will be cached along with anything listed in the manifest file.
* If any resource **404**s, nothing will be cached.
* There is an approximate 5MB limit on what can be cached
* The **Revision** number must be updated in order to update any resource
* Any update to the application cache will not be presented to the user until the second time the site is loaded
