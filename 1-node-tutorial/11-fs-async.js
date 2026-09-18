const { readFile, writeFile} = require('fs')
/* 
Here Asynchronous Functions takes call backs bcz they are treagered to return something when it is actually completed 
Synchronous fs                                             Asynchronous fs
Example:                                                   Example:
const fs = require("fs");                                  fs.readFile("data.txt", "utf8", (err, data) => {
const data = fs.readFileSync("data.txt", "utf8");               console.log(data); 
console.log(data);                                         }); 

readFileSync()                                             readFile() 
      ↓                                                        ↓ 
   READ FILE                                               start reading
      ↓                                                        ↓ 
    WAIT                                                   return immediately
      ↓                                                        ↓ 
file completely read                                       JavaScript continues 
      ↓                                                        ↓
return data                                                             ...file being read...
      ↓                                                        ↓
data = ..                                                  file finishes
                                                               ↓
                                                           callback()
*/
/* Mistake 1: Always Add utf8(Encoding used)
readFile('./content/first.txt', (err, result) => {
    if (err) {
        console.log(err)
        return ;
    }
    console.log(result)
})
*/
console.log('start')
readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return ;
    }
    console.log(result)
})

// To write 
readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return ;
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) => {
        if (err) {
            console.log(err)
            return ;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first},${second}`,
            {flag: 'a'},
            (err,result) =>{
                console.log('Done with the task')
        })
    })
})
console.log('starting next task')

/* Output=>start
           starting next task
           Hello this is first text file
           Done with the task
*/


/*
Thinking 1->readFile("first.txt");
            readFile("second.txt");
            writeFile("result.txt");
Why can't we just do that?=> bucz operations are asyn like execute reading of 
first.text ,second.txt,and also start writing at the same time 
but we are not sure that when we started writing reading of st is completed or not this may cause erro so we do
Start reading first
        ↓
first finishes
        ↓
Start reading second
        ↓
second finishes
        ↓
Start writing result
        ↓
write finishes
*/