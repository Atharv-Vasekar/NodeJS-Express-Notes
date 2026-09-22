const authorize = (req,res,next)=>{
    const { user } = req.query
    if( user === 'Atharv'){
        req.user = { name: 'Atharv', id: 41 }
        next()
    }else{
        res.status(401).send('Unauthorize')
    }
}

module.exports = authorize