const os = require('os');
/*
os is built in module so u don't need downlod it before using it also don't use ./ or ../
Useful for intereacting with operating system and server. 
 */

// tell the Info about current user
const user = os.userInfo();
console.log(user);

//this method tells the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS);