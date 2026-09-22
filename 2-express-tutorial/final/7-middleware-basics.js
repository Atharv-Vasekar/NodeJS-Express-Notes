/* Middlewares
    Express Middlewares are the functions that executes during request to the server.
    Each middleare have access to the request and response objects.
    i.e   req => middleware => res

*/

const express = require('express')
const app = express()

const logger = (req,res,next)=>{ // req,res,next Automatically passed by express
    const method = req.method 
    const url = req.url 
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()    // Very Very Imp Without this middlware will not be terminate and browser will spin contineously
}

app.get('/',logger,(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',logger,(req,res)=>{
    res.send('<h1>About</h1>')
})

/* #How to pass multiple middleware (#Order matters)
app.get('/about',[logger,authorize],(req,res)=>{
    res.send('<h1>About</h1>')
})
*/
app.listen(5000,()=>{
    console.log('Server id listening on port 5000...')
})