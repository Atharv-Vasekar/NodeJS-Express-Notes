const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello World!')
})

server.listen(5000, () => {
    console.log('Server Listening on port : 5000...')
})
/*Aa listen is Asynchronous , waits to request come in when they come in we run our CB 
output=>
Server Listening on port : 5000...
request event
request event
request event
request event
request event
request event
request event
request event
request event
request event
request event
request event
*/