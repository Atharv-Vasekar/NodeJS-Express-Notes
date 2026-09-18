/* 
Line of code are executed line by line 
Means if 1000 users are arrived and some of them try to write heavy files(or performing heavy tasks)
other users may not be served by node
*/

const { readFileSync, writeFileSync} = require('fs')
/*
Which is equivalent to      const fs = require('fs')
                            fs.readFileSync()
*/
/* 
    readFileSync, writeFileSync have two main parameters 
    1st : Path of the file on which we are working 
        *  in writeFileSync if file is not there node will crate it But But in read it will throw an error 
    2nd : [For write we have to write content here]Encoding (So that node knows the how to decode a file) [Default: utf8]
*/
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)//Hello this is first text file Hello this is second text file

writeFileSync(
    './content/result-sync.txt',// Here file automatically get created if wasn't there if is there then it will overwrite that
    `Here is the result : ${first},${second}`
)
/* If you don't what to overwrite the complete data 
   And u just what to append it you should use {flag: 'a'}
*/
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first},${second}`,
    {flag: 'a'}
)//Here is the result : Hello this is first text file,Hello this is second text fileHere is the result : Hello this is first text file,Hello this is second text file
console.log('starting new task')

/* 
Output => start
          Hello this is first text file Hello this is second text file (i.e task is done)
          starting new task
*/