---settings

title: HTTP Access Control (CORS)

---settings

## HTTP Access Control (CORS)

Cross-site HTTP requests are HTTP requests for resources from a different domain
than the domain of the resource making the request. For some time, XMLHTTPRequests
were subject to the `same-origin policy`, which dictated that a web app could
only make HTTP requests to the same domain that it was loaded from. Because 
developers needed the flexibility to making HTTP requests to other APIs besides
their own, the `Cross-Origin Resource Sharing (CORS)` was developed.

## Access-Control-Allow-Origin

This setting dictates the domain that is allowed access to a resource. 

For example, let's say that `http://qux.com` attempts to make a request to 
`http://bar.com`, but `http://bar.com` has the following header set:

```
  Access-Control-Allow-Origin: http://foo.com
```

The request would be rejected because the above setting dictates that only 
`http://foo.com`  can access the resource at `http://bar.com`.

## Access-Control-Allow-Credentials
