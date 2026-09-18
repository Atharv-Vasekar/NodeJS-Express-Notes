setInterval(()=>{  // offloaded bcz it's Asynchronous
    console.log('Hello World!!')
}, 2000)
console.log('I will run first')
/*
    process stays Alive unless you kill it by pressing ctrl + c
    or else you may get an unexpected error

    Output=>I will run first
            Hello World!!
            Hello World!!
            Hello World!!
            Hello World!!
*/
/*
    Learning => SO every Asynchronous task gets offloaded
    1. What id offloading ?
    => Offloading means giving a task to something else to handle, 
       instead of making the current thing handle it itself. 
       Node.js ───────────────→ continue doing other work
        │
        └──→ offload file operation
                    ↓
             background work
                    ↓
             result ready
                    ↓
             callback eventually runs
*/