const express = require('express')
const app = express()
const {products} =  require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{ //Returns all products only id,name,image by  removing excess info 
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

/*
app.get('/api/products/1',(req,res)=>{ // Returns a specific product (That matches url condition)
    // What if we have 300-400 products We can't set one by one separate raoutes => Route Parameters(params)
    const singleProduct = products.find((product)=> product.id === 1)
    res.json(singleProduct)
})
*/
/* Route Parameters 
    Route parameters are named URL segments used to capture dynamic values 
    specified at specific positions in a web request path.

    Key Characteristics
    Dynamic placeholders: They act as variables inside a URL path (e.g., /users/:id or /users/{id}).
    Data type: Captured values are typically parsed as strings by the server.
    Accessing values: Frameworks map these values to a special request object,
    like req.params in Express.js or route attributes in other backend frameworks.
    e.g
    app.get('/users/:id', (req, res) => {
        const userId = req.params.id;
        res.send(`User ID: ${userId}`);
    });
*/

app.get('/api/products/:productID',(req,res)=>{ // productID think is as Place holder
    // console.log(req)
    // console.log(req.params) // Its always a string
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    // Undefined if such productID not found (e.g 99, abc,....)
    if(!singleProduct){
        return res.status(404).send('Product Does not Exist')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:rewievID',(req,res)=>{
    console.log(req.params)
    res.send('Hello world')
})

/* Query string Parameters
    Way to send small amounts of information to the server using the url 

*/
/*
app.get('/api/v1/query',(req,res)=>{// URL typed = http://localhost:5000/api/v1/query?name=Atharv&id=41
    console.log(req.query)  // [Object: null prototype] { name: 'Atharv', id: '41' }
    res.send('Hello world')
})
*/

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000...')
})