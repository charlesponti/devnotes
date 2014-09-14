# HTTP

![HTTP Request & Response](http://static.ddmcdn.com/gif/dns-rev-1.gif)

The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems.[1] HTTP is the foundation of data communication for the World Wide Web.

Hypertext is structured text that uses logical links (hyperlinks) between nodes containing text. HTTP is the protocol to exchange or transfer hypertext.

## How The Web Works
![How the web works](/images/how-the-web-works.jpg)

### DNS Server
The Domain Name System (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Most prominently, it translates easily memorized domain names to the numerical IP addresses needed for the purpose of locating computer services and devices worldwide. The Domain Name System is an essential component of the functionality of the Internet.

An often-used analogy to explain the Domain Name System is that it serves as the phone book for the Internet by translating human-friendly computer hostnames into IP addresses. For example, the domain name www.example.com translates to the addresses 93.184.216.119 (IPv4) and 2606:2800:220:6d:26bf:1447:1097:aa7 (IPv6). Unlike a phone book, the DNS can be quickly updated, allowing a service's location on the network to change without affecting the end users, who continue to use the same host name. Users take advantage of this when they use meaningful Uniform Resource Locators (URLs), and e-mail addresses without having to know how the computer actually locates the services.

The Domain Name System distributes the responsibility of assigning domain names and mapping those names to IP addresses by designating authoritative name servers for each domain. Authoritative name servers are assigned to be responsible for their supported domains, and may delegate authority over subdomains to other name servers. This mechanism provides distributed and fault tolerant service and was designed to avoid the need for a single central database.

The Domain Name System also specifies the technical functionality of this database service. It defines the DNS protocol, a detailed specification of the data structures and data communication exchanges used in DNS, as part of the Internet Protocol Suite.

The Internet maintains two principal namespaces, the domain name hierarchy and the Internet Protocol (IP) address spaces. The Domain Name System maintains the domain name hierarchy and provides translation services between it and the address spaces. Internet name servers and a communication protocol implement the Domain Name System. A DNS name server is a server that stores the DNS records for a domain name, such as address (A or AAAA) records, name server (NS) records, and mail exchanger (MX) records (see also list of DNS record types); a DNS name server responds with answers to queries against its database.

## URL

```
http://google.com
```

A uniform resource locator, abbreviated URL (also known as web address, particularly when used with HTTP), is a specific character string that constitutes a reference to a resource. In most web browsers, the URL of a web page is displayed on top inside an address bar. A URL is technically a type of uniform resource identifier (URI), but in many technical documents and verbal discussions, URL is often used as a synonym for URI, and this is not considered a problem. URLs are commonly used for web pages (http), but can also be used for file transfer (ftp), email (mailto), telephone numbers (tel) and many other applications.

## Request
```
GET /index.html HTTP/1.1
Host: www.example.com
```

The request message consists of the following:  
- A request line, for example GET /images/logo.png HTTP/1.1, which requests a resource called /images/logo.png from the server.  
- Request Headers, such as Accept-Language: en  
- An empty line.  
- An optional message body.

## Response

```
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
ETag: "3f80f-1b6-3e1cb03b"
Content-Type: text/html; charset=UTF-8
Content-Length: 131
Connection: close

<html>
<head>
  <title>An Example Page</title>
</head>
<body>
  Hello World, this is a very simple HTML document.
</body>
</html>
```
The response message consists of the following:  
-  A Status-Line (for example HTTP/1.1 200 OK, which indicates that the client's request succeeded)  
- Response Headers, such as Content-Type: text/html  
- An empty line  
- An optional message body

## Status Codes

The following is a list of Hypertext Transfer Protocol (HTTP) response status codes. The first digit of the status code specifies one of five classes of response; the bare minimum for an HTTP client is that it recognises these five classes. 

* **1xx** Informational

* **2xx** Success

* **3xx** Redirection

* **4xx** Client Error

* **5xx** Server Error

## IP Address

```
➜  ~  nslookup generalassemb.ly

Server:   194.168.4.100
Address:  194.168.4.100#53

Non-authoritative answer:
Name: generalassemb.ly
Address: 54.225.83.175
Name: generalassemb.ly
Address: 174.129.230.197
Name: generalassemb.ly
Address: 107.20.230.140

```

An Internet Protocol address (IP address) is a numerical label assigned to each 
device (e.g., computer, printer) participating in a computer network that uses 
the Internet Protocol for communication. An IP address serves two principal 
functions: host or network interface identification and location addressing. Its 
role has been characterized as follows: "A name indicates what we seek. An 
address indicates where it is. A route indicates how to get there."

The designers of the Internet Protocol defined an IP address as a 32-bit number
and this system, known as Internet Protocol Version 4 (IPv4), is still in use 
today. However, due to the enormous growth of the Internet and the predicted 
depletion of available addresses, a new version of IP (IPv6), using 128 bits 
for the address, was developed in 1995. IPv6 was standardized as RFC 2460 in 
1998, and its deployment has been ongoing since the mid-2000s.

IP addresses are binary numbers, but they are usually stored in text files and 
displayed in human-readable notations, such as 172.16.254.1 (for IPv4), and 2001:db8:0:1234:0:567:8:1 (for IPv6).

## API

An application programming interface (API) specifies how some software components should interact with each other.

In addition to accessing databases or computer hardware, such as hard disk drives or video cards, an API can be used to ease the work of programming graphical user interface components. In practice, many times an API comes in the form of a library that includes specifications for routines, data structures, object classes, and variables. 

In some other cases, notably for SOAP and REST services, an API comes as just a specification of remote calls exposed to the API consumers.

### Web API

When used in the context of web development, an API is typically defined as a set of Hypertext Transfer Protocol (HTTP) request messages, along with a definition of the structure of response messages, which is usually in an Extensible Markup Language (XML) or JavaScript Object Notation (JSON) format. While "web API" historically has been virtually synonymous for web service, the recent trend (so-called Web 2.0) has been moving away from Simple Object Access Protocol (SOAP) based web services and service-oriented architecture (SOA) towards more direct representational state transfer (REST) style web resources and resource-oriented architecture (ROA). Part of this trend is related to the Semantic Web movement toward Resource Description Framework (RDF), a concept to promote web-based ontology engineering technologies. Web APIs allow the combination of multiple APIs into new applications known as mashups.

## Using APIs With Ruby

Packages with Ruby are packages that are loaded by default. Two of them, open-uri and json, are not loaded automatically when running Ruby locally. In order to load them, you can use the require keyword followed by the name of the package, like so:

```
require "open-uri"  
require "json"
```

Now with the packages loaded, you can make HTTP requests, load the HTTP response, and parse the response.

```
url = "http://www.reddit.com/.json"
request_body = open(url).read

json_object = JSON.parse(request_body)
```

In the above example, the open method that the url is passed to is part of the open-uri package. It takes a url in string format, performs a GET request to the url, and returns the response. Calling read on this method returns the body of the response.

The parse method is part of the json package. This method takes a string that contains a JSON object and converts it to a Ruby hash.

```
response = "{ 'catSound':  'meow' }"
JSON.parse(response) // { catSound: 'meow' }
```