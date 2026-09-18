/*
    What is event loop: The Event Loop is essentially the mechanism that repeatedly checks:
                        "Is there asynchronous work whose callback is ready to execute, and is the JavaScript call stack available?"
                        If yes, it arranges for the callback to run.
                        As JS is single threaded you cann't directly interupt call stack and execute call back(CB)
                        It can executed when call stack is empty(like after completing Async task it goes at he end of line to be exeuted)                   
*/

const {readFile, writeFile} = require('fs')
console.log('Started a first Task')

readFile('../content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log(result)
    console.log('Completed first task')
})

console.log('Starting next task')

/*
Output: Started a first Task
        Starting next task
        Hello this is first text file   
        Completed first task
*/
/*
    Tips:-  To move back by one directory in the terminal, use:
            cd ..
            Example
            Suppose you're here:
            D:\Projects\NodeJS\backend
            Run:
            cd ..
            You move to:
            D:\Projects\NodeJS
            Run it again:
            cd ..
            Now:
            D:\Projects
*/