# Getting Start

## Quick Start 
### node.js install
[https://nodejs.org/en/download/package-manager/current](https://nodejs.org/en/download/package-manager/current)
```sh 
$ npx create-react-app my-app
You are running Node 12.22.9.
Create React App requires Node 14 or higher. 
Please update your version of Node.

$ node --version
v12.22.9

$ sudo apt install curl
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# add ~/.bashrc profilie reopen console

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


$ nvm install 21
Downloading and installing node v21.7.1...
Downloading https://nodejs.org/dist/v21.7.1/node-v21.7.1-linux-x64.tar.xz...
########################################################################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v21.7.1 (npm v10.5.0)
Creating default alias: default -> 21 (-> v21.7.1)

$ npm -v
10.5.0

```

### Create React application 
```sh
$ npx create-react-app my-app
$ npm init react-app my-app
$ yarn create react-app my-app


Creating a new React app in /home/jhyunlee/code/javascript/D3js/GetStart/my-app.
Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

Success! Created my-app at /home/jhyunlee/code/javascript/D3js/GetStart/my-app
  npm start      Starts the development server.
  npm run build  Bundles the app into static files for production.
  npm test       Starts the test runner.
  npm run eject  Removes this tool and copies build dependencies, configuration files 

We suggest that you begin by typing:
  cd my-app
  npm start

Happy hacking!
```