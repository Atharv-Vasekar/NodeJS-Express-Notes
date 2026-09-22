/*
1)For better structure keep all middlewares in single file rather than in app
2)Suppose if we have 50+ routes then i will be dificult to add middleware to each one of them 
  that's why we have an method to add middleware fun to any route
  ## We use app.use(middleware)
    but its order matters.
    like if you write app.use(middleware) below some routes then the routes that are above 
    the app.use(middleware) will not use that middleware
*/
const express = require('express')
const app = express()
const logger = require('./final/logger')
const authorize = require('./final/authorize')

//(1)app.use(logger) //=>Applicable for all routes that comes after this
//(2)app.use('/api',logger) // => for specified path
/*
Applicable to all urls having /api 
    e.g /api, /api/items, /api/products, /api/abc/xyz 
*/
//(3)
/*  $$ Order Matters
app.use([logger,authorize])
    Output=> GET /api/items 2026
             authorize
*/
app.use([authorize,logger]) //Output=> authorize
                            //         GET /api/items 2026

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})

app.get('/api/products',(req,res)=>{
    res.send('<h1>Products</h1>')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user) //=> for upgraded autho
    res.send('<h1>Items</h1>')
})

/*  In case we want to pass multiple middleware
app.get('/api/items',[authorize,logger],(req,res)=>{
    console.log(req.user) 
    res.send('<h1>Items</h1>')
})
*/

app.listen(5000,()=>{
    console.log('Server is operation on port 5000...')
})