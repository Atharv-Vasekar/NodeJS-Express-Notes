/* Notes:
1)API(Application Programming Interface) =>  Setting an http interface to interact with our data 
                                            (data is sent using json(JavaScript object Notation))
        Server provides data => that means that any frontend app that want to access it and use it 
                                can simply perform a http request and using our data set up the api and functionality 

2)SSR(Server Side Rendering) => we will setup Tamplates and send back entire html,css,js ourselves
*/
/* res.json()
    Sends a JSON response. This method sends a response (with the correct content-type) 
    that is the parameter converted to a JSON string using JSON.stringify().
    The parameter can be any JSON type, including object, array, string, Boolean, number, or null, 
    and you can also use it to convert other values to JSON.
    e.g
    res.json(null);
    res.json({ user: 'tobi' });
    res.status(500).json({ error: 'message' });
*/
const express = require('express')
const app = express()
const {products} = require('./data.js')
// app.get('/',(req,res)=>{
//     res.json([{name: 'Atharv'}, {name: 'John'}])
// })

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000....')
}) 