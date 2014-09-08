# PROGRAMMING

## What is Programming?
A program is essentially a set of instructions, similar to a recipe, given to a
machine, whether it be a computer or any other device, to execute in order to
accomplish a task or provide a service.

## What Do Programs Actually Do?
* Keeping track of values (Variables)
* Making decisions (if -> else)
* Repeating things (loops)
* Displaying things (templating and style languages)
* Logging things (Log Files)
* Storing things (Databases such as PostgreSQL and MongoDB)

## What Can You Build?
* Web Sites
* Web Applications
* Native Apps (Mobile and Desktop)
* etc.

## Project Processes:

### Waterfall
![Waterfall Development Model](http://www.learnaccessvba.com/images/application_development/Waterfall_model.png)

Does one stage of the development process at a time, never to go back and repeat a previous step

### Agile
![Agile Development Model](http://www.tplex.com/images/tplex/AgileDevelopment.png)

Allows developers to jump from one stage to another and back again depending on what is needed to complete the job.

## Stages of Web Development

### 1. Design

#### User Experience

![User Experience](http://www.everyinteraction.com/wp-content/uploads/2012/10/ux-diagram.png)

User experience (UX) involves a person's behaviors, attitudes, and emotions about using a particular product, system or service. User experience includes the practical, experiential, affective, meaningful and valuable aspects of human-computer interaction and product ownership. Additionally, it includes a person’s perceptions of system aspects such as utility, ease of use and efficiency. User experience may be considered subjective in nature to the degree that it is about individual perception and thought with respect to the system. User experience is dynamic as it is constantly modified over time due to changing usage circumstances and changes to individual systems as well as the wider usage context in which they can be found.

#### Careers in Web Design
* **User Researcher** Indentifies user behaviors, goals, and needs through interviews, studies, and surveys

* **Information Architect(IA)** Defines the structure of the system, how content is described, organized, and discovered. For example, this can include designing a user's journey from the homepage of a shopping web application to the checkout page.

* **Interaction Designer(IxD)** Defines interactions, user flows, wireframes, and affordances of a system

* **UI Developer** Builds the user interface

### 2. Development

Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, "web development" usually refers to the main non-design aspects of building web sites: writing markup and coding.

#### What You
How are users accessing your site?
* desktop or mobile?
* phone or tablet?
* internationalization
* user disabilities

### 3. Testing

> "As soon as we started programming, we found to our surprise that it wasn't as easy to get programs right as we had thought. Debugging had to be discovered. It was on one of my journeys between the EDSAC room and the punching equipment that 'hesitating at the angles of stairs' the realisation came over me with full force that a good part of the remainder of my life was going to be spent finding errors in my own programs." - Maurice Wilkes

Web applications undergo the same unit, integration and system testing as traditional desktop applications. But because web application clients vary so greatly, teams might perform some additional testing, such as:

* Security
* Performance, Load, and Stress
* HTML/CSS validation
* Accessibility
* Usability
* Cross-browser

Many types of tests are automatable. At the component level, one of the xUnit packages can be a helpful tool. Or an organization can create its own unit testing framework. At the GUI level, Watir or iMacros are useful.

## Programming Languages

### What to look for in a language
* Community support
* Stack Overflow
* Difficulty level
* Development time
* Is what you want to accomplish going to happen on the front-end or the back-end?


![Frond-End & Back-End Development](http://signedon.com/wp-content/uploads/2012/07/signedon-frontend-backend1.png)

## Frameworks & Libraries

A web application framework (WAF) is a software framework that is designed to support the development of dynamic websites, web applications, web services and web resources. The framework aims to alleviate the overhead associated with common activities performed in web development. For example, many frameworks provide libraries for database access, templating frameworks and session management, and they often promote code reuse.

## Front-End Development
Front-end or client-side development is a relatively obscure Internet discipline. Historically, this role has been known under several aliases, htmler, web designer, coder, frontender and so on, but its core functions remain the same while expanding with the progress of the Internet. It is a hinge role that requires both aesthetic sensitivity and programmatic rigor.

To many people, client-side development might be perceived as 'making things pretty' and, while it is a valid comment since we do make things look good, as good-looking things sell better, there are many other technologies that fall within this field that might be usually overlooked.

The front-end of a web page is made of three things:
1. Structured content (HTML)
2. Presentation (CSS)
3. Interaction/behaviour (JavaScript)

* **Frameworks**
	* Angular
	* Backbone
	* etc.

* **Libraries**
	* jQuery
	* YUI
	* etc.


## Back-End Development

The backend is everything that happens before it gets to your browser. If you’re booking a flight, that’s where prices are checked, itineraries are booked, and credit cards are charged. A backend can be very simple or very complicated.

A typical setup for a backend is a web server, an application and a database. The web server delivers a note to the application that you’d like to see all of the flights to Chicago. The application looks up the flights in the database, puts together a web page that lists them, and sends that web page back to your computer through the web server. That’s all the backend. Once your computer gets a hold of it, it’s the frontend.

For technologies used in the backend, anything goes. If a database stores your name or flight info, it might be MySQL, MongoDB, PostgreSQL, or many others. Web pages could be put together with Python, Ruby on Rails, or PHP. The web server that sends those pages over to your computer might be Apache, Nginx, or IIS. The list goes on and on!

* **Languages**
	* Ruby
	* Python
	* PHP
	* etc.

* **Frameworks**
	* Ruby on Rails
	* Django
	* etc.

* **Databases**
	* An organized collection of information.
	* **Types**

		* **Relational** These databases that have a collection of tables of data items, all of which is formally described and organized according to the relational model. Data in a single table represents a relation, from which the name of the database type comes. In typical solutions, tables may have additionally defined relationships with each other. Two of the most popular relational databases are MySQL and PostgreSQL.

		* **NoSQL** A NoSQL database provides a mechanism for storage and retrieval of data that employs less constrained consistency models than traditional relational databases. Motivations for this approach include simplicity of design, horizontal scaling and finer control over availability. NoSQL databases are often highly optimized key–value stores intended for simple retrieval and appending operations, with the goal being significant performance benefits in terms of latency and throughput. NoSQL databases are finding significant and growing industry use in big data and real-time web applications. NoSQL systems are also referred to as "Not only SQL" to emphasize that they may in fact allow SQL-like query languages to be used. The most popular relational databases are MongoDB.

## APIs (Application Programming Interfaces)

In addition to accessing databases or computer hardware, such as hard disk drives or video cards, an API can be used to ease the work of programming graphical user interface components. In practice, many times an API comes in the form of a library that includes specifications for routines, data structures, object classes, and variables. In some other cases, notably for SOAP and REST services, an API comes as just a specification of remote calls exposed to the API consumers

## Version Control
Handles the management of changes to documents. It allows developers to manage multiple versions of the same codebase, which comes in handy when bugs get accidently introduced and the application needs to be reverted to a previous working state.

* **What Does Version Control Help Developers Do?**
	* Keeps track of the version of code
	* Helps developers collaborate with each other
	* Keeps track of who contributed
	* Open-source (release code to the world for free!)
	* **Popular Tools**
		* GitHub
		* BitBucket
	* **Version Control Systems:**
		* Git
		* Bazaar
		* Subversion
		* Mercurial

## Tools


* **Codepen.io** A "sandbox" for creating and editing HTML, CSS, & JavaScript.

* **Sublime Text** Text editor with added funtionality for programming.

* **Browser Developer Tools**
	* Examples: Firebug(Firefox) & Google Developer Tools(Chrome)
	* allow developers to debug and test ideas directly in the browser
	* usually provide a JavaScript console for debugging
	* show the HTML, CSS, and JS files that makes up the webpage
	* 3D view of webpage (FireFox)

## Best Practices
* **D.R.Y** - Don't Repeat Yourself
* **Commenting**
* **Testing**
* **Seperation of Concerns** - Keep your templating, styling, and behaviours seperated
