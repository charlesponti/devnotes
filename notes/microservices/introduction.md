
The development of constructing applications in the form of microservices has come about as a way for developers to both provide an easier method of building applications in more maintainable, scalable fashion and to ensure that these applications are built with a higher level of quality to better ensure user happiness. One of the most difficult issues with building large, complex applications is being able to wrap one's head around the entire application. This is especially an issue when you are building a monolithic application, in which it is impossible to understand one particular part of an application without understanding all of its other components. If you build your application with the microservices approach, you will only need to understand how that one component operates.

## What are they?
A microservice is a small, autonomous grouping of code that can work independent of other code groupings. The goal of a microservice is to have a single responsibility and to do that one job well.

### "Small"
The word "small" in this context is not a precise measurement. Every job that needs to be done will obviously require a certain amount of code, some larger or smaller than others. The only goal in terms of size is to make sure additional, unrelated logic does not begin to creep into each service.

### Autonomous

#### Deployment
By autonomous, what is meant is that a service should be able to be deployed on an isolated server or process without losing any of its functionality.

#### Communication
It should be able to receive messages from and send messages to services if necessary through the use of standard network calls, such as HTTP requests.

#### Change
Each service should be able to be upgraded or changed without making an upgrade or change to any of the other services mandatory.

#### Technology Choice Flexibility
Because each service runs autonomously, each one can use a set of technologies that are best suited to doing that job. This can mean that a two services may use different databases, one NoSQL and one SQL, without there being any issue. Services can be written in different languages, use different versions of the same dependency or framework, and so on.

## Benefits

### Resilient
One common problem when building large applications is preventing the failure in one part of the application from spreading into other, seemingly unrelated parts of the application. Because microservices are built to be autonomous and decoupled, this problem is largely prevented. This means that when one services fails, the other services should not fail, making problems easier to diagnose and fix quickly.

## Facets of Microservice Architectures

* **Domain-Driven Design**
  Focus on representing the real world in your code and modeling your system in a human-friendly manner.

* **Continuous Delivery**
  Focus on how software should effectively and efficiently get moved into production by promoting the idea that every revision to the "master" branch should be a solid release candidate.

* **Hexagonal Architecture**
  Focuses on building applications in way in which components are not stacked on top of each other, instead being "free-floating" objects that can easily communicate with the other components.

* **On-demand virtualization**

* **Infrastructure automation**

* **Small autonomous teams**
