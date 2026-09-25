// Can't we grp all api/people it will reduce code size => Yes! we use "Routers"
const express = require('express')
const app = express()

const people = require('./routes/people.js')
const auth = require('./routes/auth.js')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/people',people) //Router
app.use('/login',auth) //Router

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})