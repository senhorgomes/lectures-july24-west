What is AJAX?
A set of development techniques, its actually not a library or a framework!

AJAX (Asynchronous JavaScript and XML)

 $.ajax({
        url: 'url',
        success: (data) => {
            console.log(data)
        },
        error: (error) => {console.error(error);}
    });

Other forms of AJAX

- XMLHttpRequest
- Fetch
- jQuery.ajax() [jQuery is just a bunch of lines of javascript code]
- Axios


Pros and Cons of AJAX
Pros
- Smaller requests are faster (improved response times)
- Snappier user experience (no page reload)
- Less URLs to click through, more dynamic
- Async allows for multiple requests to queue at once
- Reduces server load (the client can format and display the response)

Cons
- It can be trickier / require more planning to implement
- We have to use an Async mindset
- You have to know, or experiment, to understand the format of the response data
- History is not updated on its own
- Method of Ajax may matter for backwards compatibility purposes

