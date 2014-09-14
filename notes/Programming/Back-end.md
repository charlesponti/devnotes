## Back-End Development

The backend is everything that happens before it gets to your browser. If you’re 
booking a flight, that’s where prices are checked, itineraries are booked, and 
credit cards are charged. A backend can be very simple or very complicated.

A typical setup for a backend is a web server, an application and a database. 
The web server delivers a note to the application that you’d like to see all of 
the flights to Chicago. The application looks up the flights in the database, 
puts together a web page that lists them, and sends that web page back to your 
computer through the web server. That’s all the backend. Once your computer gets 
a hold of it, it’s the frontend.

For technologies used in the backend, anything goes. If a database stores your 
name or flight info, it might be MySQL, MongoDB, PostgreSQL, or many others. Web 
pages could be put together with Python, Ruby on Rails, or PHP. The web server 
that sends those pages over to your computer might be Apache, Nginx, or IIS. The 
list goes on and on!

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