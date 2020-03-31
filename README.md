# chess-challenge
<img src="https://github.com/bundz/chess-challenge/blob/dev/front/src/images/board.png" alt="IMAGE ALT TEXT HERE" width="240" height="240" />

## How to run
You will need Docker. So if don't have Docker click [Here](https://docs.docker.com/install/) and install it.
With Docker installed, clone this repository and open it. In terminal executes:

```
docker-compose up --build
```

This command will run 2 containers: 1 for front-end and 1 for back-end. Front-end will be running on localhost:3000 while back-end will be runnning on localhost:3001. So if you want to acess front-end just acess http://localhost:3000. You can change these configurations on docker-compose file if you want.

## Folder Structure

```
project
│   README.md
│   docker-compose.yml
│   docker-compose.override.yml
│   README.me
│   ...
│
└───front 
│   │   Dockerfile
│   │   package.json
│   │   ...  
│   │
│   └───src
│       │   App.js
│       │   index.js
│       │   ...
│       
└───server
    │   Dockerfile
    │   package.json
```

This project is divided in 2 parts front-end (front folder) and back-end (server folder). 
The root folder contains docker-compose, eslint, gitignore configurations.

Front folder has 2 folders: public for things like manifest,json, index.html... 
and src for source code. Src folder has components and utils folders.
Components folder will have all react components with their css files. 

Server folder has some folders:
* config - for configuration files
* controllers - for controllers
* helpers - for helpers files like a class for Api Errors
* middlewares - for middlewares like validation, response...
* models - for models (king, knight, queen...)
* routes - for express routes

## How problem was solved
First I decide to solve the problem for any chess piece and any number of turns.
So, the solution is to create a tree of possible positions, using piece movement. 
I achive this tree by using recursion. See the pseudo-code below:

```
possiblePositionsInTurns piece, turns, result={}
  if turns < 1
    return
    
   for p of piece.possiblePosition
     newPiece = new Piece(p)
     result[p] = true
     possiblePositionsInTurns newPiece, turns - 1, result={}
     
   return result
```

## How to run tests
Only server side has tests so to run it on server folder type:
```
npm test
```



