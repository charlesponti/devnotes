# Authentication

Authentication is the process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization, which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.

## Cookies
A cookie, also known as an HTTP cookie, web cookie, or browser cookie, is a small piece of data sent from a website and stored in a user's web browser while the user is browsing that website. Every time the user loads the website, the browser sends the cookie back to the server to notify the website of the user's previous activity. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items in a shopping cart) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited by the user as far back as months or years ago).

## Password Encryption
![Password Salt](http://garage.invoicebus.com/wp-content/uploads/2011/09/invoicebus_password_creation.png)

## Devise
![Devise](https://raw.github.com/plataformatec/devise/master/devise.png)

Devise is a flexible authentication solution for Rails based on Warden. It:
* Is Rack based;
* Is a complete MVC solution based on Rails engines;
* Allows you to have multiple models signed in at the same time;
* Is based on a modularity concept: use just what you really need.

[Devise - GitHub](https://github.com/plataformatec/devise)

**To Generate A Model With Authentication**

```
$ rails g devise nameOfModel
```


