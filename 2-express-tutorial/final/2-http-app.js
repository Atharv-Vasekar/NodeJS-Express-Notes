const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
/*
we #Read# content files Outside bcz we are not invoking this every time when user comes to the server
we reqire this files when we instantiate server
*/

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)  // we have to add /styles.css bcz when browser tries to run html 
        // he saws the /styles.css and /browser-app.js and tries to run but as they are local he can't read those files
        //so we need to provide those links 
        // so if data is large it's inconvenient so we move on Express
        res.end()
    }
    
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }

    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }

    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }

})
server.listen(5000)