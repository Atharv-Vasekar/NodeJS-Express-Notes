/*Another way
const app = reqUIre('exoress')()
*/
const express = require('express')
const app = express()// The express export is a function that returns an object

/*
    app.get() = first argument is path and second is CB with req,res as argument
                means whenever user comes on this path he requests as GET path
                so we need to send proper response
    app.post()= first argument is path and second is CB with req,res as argument
                app.post('/users', ...) Or app.get('/users', ...)
                Same path.
                Different HTTP method.
                So they are different routes.
                GET  /users → get information  // from server to browser
                POST /users → send/create information  // from browser(user/clinet) to server
                A common API might look like:
                app.get('/users', ...)
                app.post('/users', ...)    
    app.put() = first argument is path and second is CB with req,res as argument
                PUT is commonly used when updating/replacing a resource.
    app.all() = first argument is path and second is CB with req,res as argument
                Match all HTTP methods for this path.
                So:
                app.get('/secret', ...)
                means only GET.
                But:
                app.all('/secret', ...)
                means essentially:
                GET     ✓
                POST    ✓
                PUT     ✓
                PATCH   ✓
                DELETE  ✓
                ...
    app.use() = 
    app.listen() = 
*/

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1>')// Express's res.send() essentially handles the response for you.
    // i.e Here is my complete response. Send it and finish.
    // So you do need to type 
    /* like in http 
    res.write('Hello');
    res.end();

                Response methods

        Node's lower level
            │
            ├── res.write()  → send a piece
            └── res.end()    → finish

        Express's convenient level
            │
            └── res.send()   → send + finish
    */
})

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Page</h1>')
})

app.all('{*splat}',(req,res)=>{  // {*splat} means ?
    /*
        * (Wildcard modifier): Matches zero or more path segments, including slashes (/). 
        In Express 4, a bare * was allowed, but Express 5 requires all parameters to have a name.

        splat (Parameter name): The arbitrary variable name assigned to the captured match. 
        You can name it anything (e.g., {*path}, {*rest}, {*anything}).

        { } (Braces): Groups the modifier with the parameter name 
        so the parser knows the asterisk applies to the whole capture.
    */
    res.status(404).send('<h1>Page Not found</h1>')   //res.send('<h1>Page Not found</h1>') Gave an error
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000....')
})