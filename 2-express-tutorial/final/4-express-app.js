const express = require('express')
const path = require('path')

const app = express()

/*
static is the files that server doesen't have to change 
like if yuo have 2000K images you don't need to write sendFile every time 
so for them express will take care of them it will set there type,status code ,etc . 
e.g of static assetes Image file,Style file,JS(Dynamic for browser app !! So makee dynamic on Browser) file also
    then how to set up something Dynamic ? Covered id Server side rendering
*/
/* 1)
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

We used here path.resolve and __dirname to give proper adderes __dirname gives current files name 
so we need to just add forward path form this location 
If we don't give __dirname path may computed wrong 

Prev. we wrote this code without transfering index.html to public folder  
but its also static Asset file  
So we have 3 ways 1) Above (using send file )
                  2) Adding to Static Assets
                  3) SSR (Server Side Rendering)
*/

/* 2)
#index.html Always gonna be Root#
so whenever user hit the server By default server serves the index html by default 
As our index html has all the path we can me full working module
*/

//setup static and middleware 
app.use(express.static('./public'))

app.all('{*splat}',(req,res)=>{
    res.send('<h1>Page Not Found</h1>')
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000')
})