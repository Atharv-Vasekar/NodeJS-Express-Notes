// Local or We don't want to share it to/in other files (e.g env avriables)
const secret = 'scerate'; // Unlike cpp '' & "" are same `` are Tempalate literals

// share 
const john =  'john';
const peter = 'peter';

module.exports = {john,peter};// this share our values in this module 
//But this statement is belong to commanJS

/*
    Here {john,peter} = {john: john,peter: peter}
    Not  {john,peter} = {john: 'john',peter: 'peter'} This is Invalid 
*/