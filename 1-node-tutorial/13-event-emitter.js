// on => Listen for an event 
// emit => emit an event

/* Approach 1
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data Recieved`)
})
customEmitter.on('response', () => {
    console.log(`other Task`)
})
/
customEmitter.emit('response')
*/

const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`User data Recieved , User Name:${name} User Id:${id}`)
})
customEmitter.on('response', () => {
    console.log(`other Task`)
})
/
customEmitter.emit('response','Atharv',41)
/*Approach 1
Output => data Recieved
          other Task
    Tips:- 1) Order matters if you put emit before(i.e above) on it will not perform any task
           2) If   customEmitter.on('response', () => {
                    console.log(`data Recieved`)
                })
                 customEmitter.emit('response')   
                customEmitter.on('response', () => {
                    console.log(`other Task`)
                })   
                output=>   data Recieved
    Approach 2
    We can pass the Arguments while emmiting the event
    output => User data Recieved , User Name:Atharv User Id:41
              other Task
*/