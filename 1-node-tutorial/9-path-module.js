const path = require('path');// Used to handle and transform file and directory paths in a cross-platform way

console.log(path.sep)//Returns the path separator used by the current operating system in Node.js.
// Window= \ , Linux/macOS= /

console.log(path.delimiter)//Returns the character used to separate multiple paths in an operating system environment variable.
// Window= ; , Linux/macOS= :    [e.g C:\Program Files\nodejs;C:\Users\Atharv\bin;C:\Windows]

const filepath = path.join('/content','subfolder','test.text');//Is used to combine multiple path parts into one proper path.
console.log(filepath);// \content\subfolder\test.text

const basename = path.basename(filepath)// Returns the last name the filepath
console.log(basename)//   test.text

const absolute = path.resolve(__dirname,'content','subfolder','test.text')//Returns the Absolute path
console.log(absolute)//   D:\tutorialNodejs\content\subfolder\test.text
/*
Bcz our application gonna run in different environment so the path of some kind of resource may be different
like linux,macOS,Windows 
 */