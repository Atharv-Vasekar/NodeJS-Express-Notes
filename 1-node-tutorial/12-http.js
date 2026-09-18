//If you did any change you have to kill(stop by ctrl c) server first then refresh on home page to send req again
const http = require('http')
/* code 1
const server = http.createServer((req,res)=>{
    res.write(`Hello this is home page`)
    res.end()// from here you can't write anything But you can write in end() itself
})
*/
// req object get created only when user hits the web page 
const server = http.createServer((req,res)=>{ // req.url tell that What address a clinet is requesting or the what the end point clinet is requesting 
    if(req.url==='/'){// '/' is comman prectice for Home page
        res.end(`Welcome to our Home page`)
    }else if(req.url==='/about'){// if you go to localhost:5000/about
        res.end(`Here is our sshort History`)
    }else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find page your looking for</p>
            <a href='/' color='red'>Home Page</a>
        `)
    }
    /* This will give error Bcz JS will run first loop as well last condition at a time so you will get (ERR_STREAM_WRITE_AFTER_END) Error
    if(req.url==='/about'){// if you go to localhost:5000/about
        res.end(`Here is our sshort History`)
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find page your looking for</p>
        <a href='/' color='red'>Home Page</a>
    `)
    */
})



server.listen(5000)// 5000 is port number so search on search engine
//http://localhost:5000/  or localhost:5000
//in 1st code==> you will see  Hello this is home page and your server don't stop here he will remain on continue
