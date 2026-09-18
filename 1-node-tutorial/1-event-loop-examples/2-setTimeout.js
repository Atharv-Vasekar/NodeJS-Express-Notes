//Started operating system process
console.log('first')
setTimeout(()=>{            // And setTimeout is Asynchronous
    console.log('second')  //It means => Run this callback after at least 0 ms, 
}, 0)                     //when the current synchronous code has finished and the event loop gets a chance to execute it.
console.log('third')
//Completed and exited operating system process

/*
    Output=> first
             third
             second
*/
/*
                 Node.js
                    |
        ┌───────────┴───────────┐
        │                       │
   Call Stack              Timer system
        │                       │
 console.log first         setTimeout(0)
        │                       │
        ↓                       ↓
      first             wait until eligible
        │
 console.log third
        │
        ↓
      third
        │
        ↓
   Call stack empty
        │
        ↓
   Event Loop checks
        │
        ↓
      second
*/