/*
    stream is useful to read,write,or both,transform data(big)
    like if we want to read big data we cant store in single var.
    so we store it in chunks using stream
*/
const { createReadStream } = require('fs');
 
const stream = createReadStream('./content/big.txt')

stream.on('data', (result)=>{
    console.log(result)
})
stream.on('error', (err) => { console.log(err) } )
/* output=>
    <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>
    <Buffer 57 6f 72 6c 64 20 33 39 32 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 32 0a 48 65 6c 6c 6f ... 65486 more bytes>
    <Buffer 6f 72 6c 64 20 37 37 37 35 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 36 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 37 0a 48 65 6c 6c 6f 20 ... 37768 more bytes>


    You can See the chunk of 65486 bytes
    Notes: 64kb default 
           last buffer - remainder
           highWaterMark - control size
           const stream  = createReadStream('./content/big.txt', { highWaterMark: 90000 })
           const stream  = createReadStream('./content/big.txt', { encoding: 'utf8' })
           Both => const stream  = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8', })
*/