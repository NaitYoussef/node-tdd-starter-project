# Node TDD starter project

A starter project for TDD katas and examples using Javascript over babel.

This starter project contains also a linting configuration that triggers each time files are saved, and launches all tests aswell. This setup is perfect for TDD katas since you only have to save your files to run test and lint source files.

## Usage

Clone this repository

`$ git clone git@github.com:NaitYoussef/node-tdd-starter-project.git`

then run npm install

`$ npm install`

Then start 

`$ npm start`

Then the includes helloworld example will be linted and and tests will be run 

```
$ npm start

> javascript-tdd-development-environment@1.0.0 start /home/ynaitbel/IdeaProjects/node-starter-project
> npm-run-all --parallel lint:watch test:watch


> javascript-tdd-development-environment@1.0.0 test:watch /home/ynaitbel/IdeaProjects/node-starter-project
> npm run test -- --watch


> javascript-tdd-development-environment@1.0.0 lint:watch /home/ynaitbel/IdeaProjects/node-starter-project
> npm run lint -- --watch


> javascript-tdd-development-environment@1.0.0 lint /home/ynaitbel/IdeaProjects/node-starter-project
> esw src  --color "--watch"


> javascript-tdd-development-environment@1.0.0 test /home/ynaitbel/IdeaProjects/node-starter-project
> mocha --reporter progress buildScripts/testSetup.js "src/**/*.spec.js" "--watch"



  [▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬]

  1 passing (13ms)

✓ Clean (2:17:42 PM)
```

When saving the helloworld.js file test rerun automatically and results are displayed on the terminal.
