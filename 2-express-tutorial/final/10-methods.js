// HTTP Methods

/*
    GET - read data (By default method in browser)
    POST - insert data
    PUT - update data
    DELETE - delete data
*/

const express = require('express')
const app = express()
let {people} = require('./data')

//Static Assets
app.use(express.static('./methods-public'))

//Parse from data
// Parse the the data and adds the value to the req.body  (##Not req.body())
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())

app.post('/login',(req,res)=>{ // /login is not universal its the action attribute in form  
    //console.log(req.body) // { name: 'Atharv' }   this name also is not universal its name attribute of input
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide Credentials..')
})

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data: people})
})

app.post('/api/postman/people',(req,res)=>{
    const { name } = req.body
    if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people ,name] })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.put('/api/people/:id',(req,res)=>{
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person)=> person.id === Number(id))
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `No person with id ${id}`})
    }

    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `No person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})