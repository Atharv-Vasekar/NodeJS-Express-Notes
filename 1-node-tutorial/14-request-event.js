const http = require('http')

//Using event emitter API
const server = http.createServer();
//emmits request event 
//subscribe to it/ listen for it / respond to it

server.on('request', (req, res)=>{
    res.end('Welcome')
})

server.listen(5000)