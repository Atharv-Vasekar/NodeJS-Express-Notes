// Package,Dependancies and modules are same things (sharable JS code) you can use someones JS code from downloading npm or use your own in different prject 
/*
    npm = Node Package Manager.
    npm is the package manager for the Node.js ecosystem.
    📦 Install packages → npm install express
    🗑️ Remove packages → npm uninstall express
    🔄 Update packages → npm update
    📋 Keep track of dependencies → package.json
    🌐 Download packages from the npm registry
    🛠️ Run project scripts → npm run ...
    Node.js=> Runtime that allows JavaScript to run outside the browser
    npm=> Tool used to install/manage Node.js packages
          It downloads packages from the npm Registry, 
          which is an online repository of JavaScript/Node.js packages.  
 */
/*
    When we Downlod node we also install npm
    npm - global command, comes with node 
    npm --version or npm -v or npm --v => shows the version of node your using(!Type this in Terminal)

    1. Local dependency - use it only in this perticular project
        npm i <packageName>  or  nmp install <packageName>

    2. Global dependency - use it in any project
        npm install -g <packageName>
        sudo npm install -g <packageName>  (mac/Linux)
*/
/*
    package.json - manifest file (stores important information about project/file)
            It can contain things like:

            {
               "name": "my-project",
               "version": "1.0.0",
               "main": "app.js",
               "scripts": {
                    "start": "node app.js"
                  },
               "dependencies": {
                    "express": "^5.1.0"
                }
            }
            It tells npm things such as:

            What is this project called?
            What version is it?
            What is the main file?
            What packages does it depend on?
            What commands/scripts can I run?
    1.Mannual Approach (create package.json in the root, create properties etc)
        You could manually create a file called:
        package.json
        in your project's root folder and write the JSON yourself.
        But that's inconvenient.

    2.npm init (step by step , press enter to skip)
        After typing npm init npm will ask you questions:

        package name:
        version:
        description:
        entry point:
        test command:
        git repository:
        keywords:
        author:
        license:
        You can press Enter to accept the default for each one.
        At the end, npm creates the package.json for you.

    3.npm init -y (everything by default)
        The -y means essentially "yes to all the default choices."
        So instead of answering questions one by one, npm immediately creates a default package.json.

    # some dependancies require other dependancies to be installed
      so if you install such dependancies other will automatically get installed (e.g bootstrap)
*/

const _ = require('lodash')// You need to download lodash before use here 

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)// [ 1, 2, 3, 4 ]
console.log('Hello World')
/*
    While sharing or pushing code on gitHub we have to use .gitignore to not push node_modules and .env variables
    So we share file havig less size
    But someone cloned our code and tried to run directly it won't work 
    bcz dependencies that our code require may not be present in its environment 
    so you have to install first or this 
    You can do manually by watching dependencies used from package.json 
    or just run npm install it will download all required packages

*/

/*
    dependencies=> These are packages your actual application needs to run.(App needs this to work)
    devDependencies=> These are packages you need while developing, but your application doesn't need them to run in production.
                        e.g nodemon ->nodemon watches your files and automatically restarts your server when you make changes.
                                      So you don't need to restart your server again and again

    How to install devDependencies?
    => npm i <packageName> -D   or   npm i <packageName> --save-dev
       e.g npm i nodemon -D
       ## To use nodemon you have to run server like nodemon app.js instead of node app.js
*/

/*
    "scripts": {
        "start": "node app.js"
    }
    What it does Exactly? 
        It lets us create shortcuts for commands that we are frequently runing.
        so now we don't need to write node app.js to start server we cann use npm start to start server
        Normally : npm nameOfCommand
        For Some : npm run nameOfCommand 
    E.g
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },
    Won't run by running npm dev (will gave an error)
*/