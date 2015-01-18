## Mobile

In this section, we will cover some common pitfalls and helpful pointers when optimising a web sites and web apps  for mobile.

Increasing the performance of web sites and web apps on mobile devices has become a top priority for many developers. This is largely due to the fact that an ever-increasing amount of users are doing their web browsing via their phones or tablets, as opposed to only when they are sitting in front of their computer. This is not to say that one should favor either mobile or desktop design, but that a good web developer with always take both into account. The user interface should be smooth, dynamic, intuitive, and performant, whether it is being viewed on a 5-inch screen, a 15-inch screen, or a 27-inch screen.

#### Interface versus Software Performance?

There are two types of performance that have to be taken into account. One is **interface performance** and the other is **software performace**. The software performance of your site is how quickly your site's HTML, JavaScript and CSS code is executed. The interface performance of your site, on the other hand. is how fast the user feels your site is. This interface performance, as studies have shown, can be the make or break indicator of whether users will or will not have a pleasure experience using your web site or application. So with that, let's go through some of the most common issues one must tackle when designing a great mobile experience.

### Scrolling

```css
  * {
    -webkit-overflow-scrolling: touch;
  }
```

One style setting that is very useful to add to all elements on your site is the `-webit-overflow-scrolling: touch`. This will enable a smooth scrolling experience when users are viewing your site on a mobile browser. Users have come to expect that when they flick their finger on their screen, your site should scroll accordingly. Without setting this property, the site will cease to scroll once their finger has left the touch display which leads to a poor user experience.

### Button Presses

By default, if a user presses button, the mobile browser their using will wait 300ms before actually performing any action. This delay is used to allow for either a potential second touch if the user wanted to double tap/click or if the user pressed the button by accident while scrolling.

If the button is clicked and no other event is recorded by the browser within that 300ms, then nothing will happen the button action will be performed.

If the button is clicked during a scroll event, then the button action will not be performed.

This is a very important thing to keep in mind as accidental touches on mobile devices are quite common and because, if the user actually intended to click, they will need to wait the 300ms before the browser starts to process their request. This may not seem like a lot of time, but a recent study showed that it only takes 100ms for a user to feel as though they waiting. The longer they have to wait the worse their experience is going to be.

The best way to alleviate this is to take advantage of the `:focus` styling on buttons:

```css
  button:focus {
    outline: 1px solid blue;
  }
```

You don't have to give your button a `1px solid blue` outline, of course, but you should give it some styling once the button has entered its focus state. This will greatly improve the user's perception of the responsiveness of your site.

### Loading Indicators

It is a common trend for sites to employ some form of loading indicator, whether it be spinning or otherwise. Some designers feel that it is crucial to let the user know that the application is currently performing a task and providing them with this spinning animation is a good way to achieving that goal. Many recent studies, however, have proved that this technique actually hurts user experience. The reason is because once the loading indicator appears, the user's mind automatically goes into what I like to call "wait mode".

**Have you noticed that when you are looking a clock, you feel as though time is somehow moving slower than usual?**

Of course, you have. This is the same thing that occurs when a user is presented with with a loading indicator. There are many ways to work around this issue, but one of the most popular, largely heralded by the team behind Google's Material Design, is to use the length of your animations handle this loading time.

Say you have an interface where when a user clicks a button, a HTTP request is made and then the response will be rendered on the page. If from your testing, you know that the request usually takes around 200ms, then you can apply some 200ms animation that will execute once the button is pressed.

If you've ever used any of Google's Material Design-ed apps, you'll notice that the user interface moves slowly but feels so smooth and fluid. When you press a button, there is a animation within the button itself that lasts about 200ms and then there might be a page transition that will take another 200-300ms. This technique obscures the loading of content from the user and has had a very positive reception from users of these applications.

### 44 pixels

```css
  .btn {
    height: 44px;
    margin: /* Up to you */;
  }
```

Another quandary many designers and developers find themselves in is what size should buttons be. Well, no need fret here because Apple has solved that problem for you. After lengthy studies, research, and user testing, they've determined that, taking in the various finger sizes and lengths, **44 pixels** is the sweet spot for a well-sized button. This does not take margins into account, so of course you will want to apply a healthy amount of spacing between buttons that are either vertically or horizontally aligned next to one another, but having at least a 44 pixel height is a good size.
