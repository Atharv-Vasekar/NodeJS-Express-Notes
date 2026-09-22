const express = require('express')
const app = express()
const morgan = require('morgan') // u need to install morgan 1st
const logger = require('./final/logger')
const authorize = require('./final/authorize')
/*
  req => middleware => res

  1. use vs route
  2. options - 1.your own 
               2.express built in
                e.g    app.use(express.static('./public'))
               3.third party 
                e.g    this code 
*/
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})