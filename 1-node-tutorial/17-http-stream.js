var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFilesync('./content/big.txt', 'utf8') // this is bad practice
        // res.end(text) //it sends whole bunch of data at single time to user
        const fileStream = fs.createReadStream(',/content/big.txt', 'utf8');
        fileStream.on('open', () =>{
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            console.log(err)
        })
    })
    .listen(5000)

// this code sends / wites data in chunk