/*We don't need to write all code in single app.js file 
we can simply Export and Import(require) other in folder or 3rd party modules*/ 
// In commanJS Every file is Model(by default)
// Modules = Incapsulated code (only shares minimum)

const names = require('./4-names.js');//const {john,peter} = require('./4-names.js'); we can deconstruct it also
const sayHi = require('./5-utils.js');
const data = require('./6-Alternative-flavor.js');
require('./7-mind-grenade.js');// The sum is 3
/* 
    concept-1: What exactly require() do ?
            =>require() executes the module first, 
            and then returns that module's module.
            exports value to the place where require() was called.
            e.g // math.js
                function add(a, b) {
                    return a + b
                }
                module.exports = add
                // app.js
                const add = require('./math.js')
                console.log(add(2, 3))  
                What happens?
                require()
                    ↓
                execute math.js
                    ↓
                get module.exports
                    ↓
                store it in add
    concept-2: What if we don't export anything? like in 7-..
            =>  require('./mind-grenade.js')
                        ↓
                Node executes mind-grenade.js
                        ↓
                add(1, 2) runs
                        ↓
                "The sum is 3" printed
                        ↓
                Node checks module.exports
                        ↓
                Nothing was assigned to module.exports
                        ↓
                module.exports is still {}    {bcz in module there is inbuilt module.exports={} letter we assign it in that module itself}
                        ↓
                require() returns {}
    concept-3: If {} or anythig is returned, but I didn't write const result = require(...) to recieve, where does that {} go?
            => It goes nowhere.
               it's simply ignored also ur not able to access that data 
*/              


console.log(data);//{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
/* 
1) require('./4-names') is also fine but .js is recommanded with reqire().
2) No need .js for external packajes require("express") or require("mongoose").
3) ./  -> look in current folder=>
            project/
            ├── app.js
            └── math.js

            Inside app.js:
            const math = require("./math")

4)  ../ -> go up one folder=>
            project/
            ├── app.js
            └── utils/
                └── math.js

            Inside math.js:
            require("../app")

*/
console.log(names);



sayHi('Atharv');
sayHi(names.john);