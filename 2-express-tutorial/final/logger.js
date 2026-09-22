const logger = (req,res,next)=>{ // req,res,next Automatically passed by express
    const method = req.method 
    const url = req.url 
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()    // Very Very Imp Without this middlware will not be terminate and browser will spin contineously
}

module.exports=logger