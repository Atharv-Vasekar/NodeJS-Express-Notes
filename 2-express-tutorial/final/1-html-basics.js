//port = endpoint of communication
//Don't use port Numbers from 0–1023 as ther are alreadty taken by essentials things e.g Port 20 / 21: File Transfer Protocol (FTP) for transferring files,Port 22: Secure Shell (SSH) for secure remote logins and tunneling.
//We always always need to include method is res.end()
/*
1} res.end()
res.end() method signals to the server that all of the response header and body have been sent, 
that server could consider this message complete.thus the method res.end() must be called on each response
*/ 

/*
2} HTTP status codes
    1.Informational responses (100 – 199)
    2.Successful responses (200 – 299)
    3.Redirection messages (300 – 399)
    4.Client error responses (400 – 499)
    5.Server error responses (500 – 599)
*/

/*3) req    (we can use any name but req is convineant)
    req is an object that represents the incoming HTTP request from a client.
    It holds all the details about what the user or frontend is asking the server to do.

    Key Properties of req
    req.method: Tells you the HTTP action, such as GET, POST, PUT, or DELETE.
    req.url: Gives you the full path or address of the incoming request.
    req.params: Captures dynamic variables in your route path (like /user/:id).
    req.query: Grabs query string parameters sent after the ? in a URL (like ?search=node).
    req.body: Holds data sent inside a POST or PUT request, like a submitted form or JSON payload (requires body-parsing middleware).
    req.headers: Contains metadata sent by the browser or client, such as authorization tokens, user-agent, or content type.
*/

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'}) // Write the content in Headers res.writeHead(StatusCode,Message of transfered data)
//         //'content-type':'text/html' => Home Page & if'content-type':'text/plain' => <h1>Home Page</h1>
//     res.write('<h1>Home Page</h1>')
//     res.end()
// })

const http = require('http')

const server = http.createServer((req,res)=>{

    const url = req.url
    
    // home page
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    // about page 
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'}) 
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //404
    else{
        res.writeHead(404,{'content-type':'text/html'}) 
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)