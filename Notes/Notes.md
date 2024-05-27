### # DEV ENV
## Git
To clone a repository:
1. navigate via commandline to folder where the new repo should reside (NOT inside another repo!!)
1. from github, go to the repo > click 'Code' button > copy SSH key
1. on commandline `git clone` and paste in the SSH key
Basic commands: status, add, commit, push:
- `git log` - display commit log (`git log --format=full`); `q` to exit log
- `git status` - show status of local repository files
- `git add .` - add all untracked files in file tree from current location
- `git commit -m "description"` - commit new and modified files
- `git push` - push the committed files to the repository main branch (optionally include a branchname)
Branch/Merge commands:
- `git checkout <branchname>` - switch to <branchname> branch
- `git checkout -b <branchname>` - include `-b` to create a new branch and then switch to it
- `git push --set-upstream <remotename> <branchname>` - this the first push needed to let remote repository know about a new branch name
  - same as `git push -u <remotename> <branchname>`
  - example: `git push -u origin main` to push local changes (on main) to remote repository (origin)
- to merge changes back to main (or another branch)
  - via GitHub, open pull request on GitHub to get approved and then merge changes back to main
  - via commandline, `git merge`
Branch workflow
1. switch to main (`git checkout main`) and `git pull` the latest changes
1. create a new branch and switch to it (`git checkout -b <branchname>`)
1. do your work on the branch and add/commit/push as usual (see above for initial push command)
1. when work is done, open a pull request on GitHub
1. merge your code to main
## Bootstrap
CSS framework and front-end toolkit
Install in HTML/JS project by either downloading the files and adding them to the project or via the CDN:
1. insert linked css in the head of the html file BEFORE any other style sheets 
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
```
2. insert script at the end of the body section of the html file BEFORE any other custom scripts 
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```
Install in React app via NPM:
1. `npm install bootstrap` (OR `npm install bootstrap@5.3.2` for a particular version)
1. To add the Bootstrap styles, import into app main entry point `./src/main.jsx` as the top-most import `import 'bootstrap/dist/css/bootstrap.min.css'` (either just before or just after `import React from 'react'`)
1. To add the Bootstrap plugins (if needed), `import bootstrap from 'bootstrap'`
## Node.js
Open-source, cross-platform, server-side JavaScript runtime environment built on Chrome V8 JavaScript engine which enables execution of JavaScript outside of a browser so the same language can be used in both front-end and back-end development.
Install via NVM (node version manager) to allow for multiple versions of Node.js. See https://github.com/nvm-sh/nvm for latest version.
1. install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
1. run `nvm -v` to verify nvm (node version manager) installation
1. install node.js lts (long-term support) version: `nvm install --lts`
1. run `node -v` to verify node.js installation
1. run `npm -v` to verify npm (node package manager) installation
Open a Node.js console to test and debug JavaScript
1. run `node` to open a Node console
1. `ctrl-d` exits the Node console on Mac (`ctrl-c` twice on Windows)
Run JavaScript file in Node.js console
1. run `node index.js` to run a JavaScript file called index.js
1. re-run same command to run script again
Create a Node.js project
1. create a directory for the project
1. cd into the new dir
1. create index.js file
1. run `npm init` (or `npm init -y` to skip the prompts)
1. run `npm i <package name>` to install any packages needed
## React.js
Open-source Javascript library developed and maintained by Facebook and used to build front-end web applications (check out React Native, which is a framework built on React.js for developing cross-platform mobile apps with a single codebase)
Install *React Developer Tools* extension in Chrome browser.
Props vs. State
- props is an object containing properties passed as an argument to a component (similar to function arguments); the object is called 'props' by convention
- props are immutable
- state is internal data managed by a component (similar to local variables)
- state is mutable and often changes over time
## JSX
JavaScript XML is a syntax extension used primarily with React for building UI components. It allows developers to write HTML-like code in JavaScript files.
- uses curly braces `{}` to embed JavaScript expressions in HTML
- `classname` is used instead of HTML `class` to avoid reserved word conflict
- inline styles are objects instead of strings; style names are camelCase, no dashes
## Vite
Build tool for setting up and developing with React, Vue, and others.
- prerequisite: NodeJS
Create a new Vite + React app via NPM (see Node.js):
1. `npm create vite@latest my-app -- --template react` (OR omit `-- --template react` to manually select type)
1. `cd my-app`
1. `npm install`
Run Vite + React app via NPM:
1. `npm run dev` (OR `npm run dev -- --port 3000`)
1. `o + enter` to open in browser
1. `q + enter` or `ctrl-c` to quit
1. `h + enter` for help listing of other commands
To install fontawesome:
```
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome
```
## Express.js
Web framework for Node.js that is built on top of the basic Node.js HTTP server. The framework is fast, unopinionated, minimalist, and simplifies the process of building robust and scalable web apps and APIs.
Create an Express server by creating a Node.js project with Express.js:
1. create a directory for the project
1. cd into the new dir
1. create index.js file
1. run `npm init` (or `npm init -y` to skip the prompts)
1. run `npm i express` to install the Express.js package as a dependency
1. create an express server by adding the following code to index.js
1. run the server `node index.js` (OR `nodemon index.js` OR update scripts object in package.json with `"start": "nodemon index.js` and run `npm start` from terminal)
1. open web browser and navigate to localhost and port
1. `ctrl-C` to exit nodemon
```javascript 
// Import the Express module and assign it to the 'express' variable
const express = require('express');
// Create an instance of the Express application
const app = express();
// Define the port number for the server to listen on
const PORT = 3000;
// Define a route for handling HTTP GET requests to the root path '/'
app.get('/', (req, res) => {
// Send the response 'Hello, Express!' to the client
  res.send('Hello, Express!');
});
// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
// Log a message when the server is successfully started
  console.log(`Server is listening at http://localhost:${PORT}`);
});
```
### optional npm packages:
CORS is a Node.js middleware package used to enable CORS with various options.
- `npm i cors`
- `const cors = require('cors');`
- `app.use(cors());` (middleware)
Morgan logger is a middleware package used as an HTTP request logger (install as DEV dependency using -D flag).
- `npm i -D morgan` (install as dev dependancy)
- `const morgan = require('morgan');` - require at top of file
- `app.use(morgan());` (middleware)
Mongoose is an ODM (object data modeling) library used as an intermediary between a Node.js application and a MongoDB database.
- `npm i mongoose`
- `const mongoose = require('mongoose')` - require at top of file
## ThunderClient extension to VSCode
ThunderClient is a lightweight REST API client used for testing HTTP requests within VSCode editor.
Can also use curl on commandline.
With server running (`nodemon index.js`):
1. paste url in
1. select type of operation (GET, POST, PUT, DELETE)
## Deploy on AWS
see separate slides
run `serverless info` in terminal from server app folder to get the URL
## Other notes
HTML data attributes
- A way to store extra data that does not need to be rendered with an HTML element.
- Any attribute on any HTML element whose attribute name starts with `data-` is a data attribute.
- With JQuery, the data attribute `data-id` can be RETRIEVED from an HTML element using attr() or data() methods:
  - `$(this).attr('data-id')` OR `$('selector').attr('data-id)`
  - `$(this).data('id')` OR `$('selector').data('id')`
- With JQuery, the data attribute `data-salary` can be SET in an HTML element using data() method:
  - `$('selector').data('salary', 10000)`
Callback function - a function that is passed to another function as a parameter to be used at a later time