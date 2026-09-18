//const {readFile} = require('fs')
/* Approach 1-2
// readFile('../content/first.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) =>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// getText('../content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))

const start = async () => {
    try{
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')
        console.log(first, second)
    }catch (error) {
        console.log(error)
    }
}

start()
*/
/*Approach 3
const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFilePromise('../content/first.txt', 'utf8')
        const second = await readFilePromise('../content/second.txt', 'utf8')
        await writeFilePromise('../content/result-mind-graned.txt', `This is comming from 2-async-patterns: ${first} ${second}`)
        console.log(first, second)
    }catch (error) {
        console.log(error)
    }
}
start()
*/

const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try{
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')
        await writeFile('../content/result-mind-graned.txt', 
            `This is comming from 2-async-patterns: ${first} ${second}`,
            {flag: 'a'})
        console.log(first, second)
    }catch (error) {
        console.log(error)
    }
}
start()