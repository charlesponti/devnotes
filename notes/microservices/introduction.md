
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

### Deployment? That was easy!
Because microservices are small, changes to them can be made quickly and those changes can be deployed quickly as well. This greatly reduces the time between an idea being presented and that functionality being in the hands of the application's users. In a more monolithic or tightly-coupled application, an idea may be seemingly easy to implement, but more thorough testing will have to be done to ensure that the change has not broken all of the other parts of the monolith.

It has also been shown that making services small and deployment easy leads to more deployments being made more frequently. Many times multiple deployments of multiple of services will be shipped in one day. What this proves is that a service-oriented architecture greatly increases the confidence of the development and development operations team in the software that they are producing and distributing.

### Composability, a.k.a Lego Fun
Something that becomes apparent when you begin to break your application up by the jobs that certain sections of code perform is that there may be quite a bit of code duplication, whereby multiple chunks of code are doing the same job. This means that you can replace all of those separate chunks of code, that may be tightly-coupled to the code they are found within, by one resilient, potentially easier-to-test, service.

Also, because the job of each service is clearly defined, they can reused easily, both by the team of developers that created it and by other teams, both inside or outside your organisation.

### No More Legacy Software
One aspect of microservices that all developers will love is they completely remove the possibility of legacy code. "How do they do that?," you may ask. Anyone who has worked at a company which has existed for a decent length of time has come across come blob of legacy code. The reason that legacy code is there is because its big, difficult to debug, and works just well enough that no one has to touch it. Also, everyone is afraid to touch it because if they poke it the wrong way, the company's entire system will come crashing down to the ground like a house of cards. With a service-oriented architecture, no single service can ever become so large and terrifying that it is difficult to rip out and replace.

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
