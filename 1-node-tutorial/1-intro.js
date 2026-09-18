// To copy prev comman on terminal use Up arrow key (for older you can use it multiple time)
const amount = 12;
/* you don't need to always add ; at the end of line bcz JS 
has Automatic Semicolon Insertion (ASI) 
but certain statements starting with (, [, `, +, or - 
can sometimes be interpreted as continuing the previous line.*/
if(amount < 10){
    console.log("Small Number");
}else{
    console.log("Large Number");
}
/* Backticks + ${expression} = template literal interpolation.*/
console.log(`Hey It's my ${amount} amount`);

/* setTimeout is used to do task onece after specific amount of time
 it takes callbacke and timeout in milliSeconds*/
setTimeout(()=>{
    console.log("Hello World")
},1000)

/* Unlike setTimeout, setInterval performs taks contineously after specified time interval*/
// to stop it press Cntl C
setInterval(()=>{
    console.log("Hello World 2")
},2000)