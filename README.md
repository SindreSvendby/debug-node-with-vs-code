# Debugging in VS Code with different modules types

Example repo to show correct config in VS Code for debugging 
on different setups


## Config files.

See the `.vscode` folder for all Code spesific config

## ESM modules native in node 8.5+

Node 8.5 supported esm module if we use use the flag `experimental-modules`.
See (index.mjs in the native-node folder)[]

## Libary @std/esm 

Use the esm libary to use import/export syntax in your files. 


## Babel 

Use babel to create compile down the code to old fashion ES 5 syntax. 

Also need babel-pollyfill, sourcemapping and degress performant. 
Not recommended for new stuff, but if you are running a isomorphic app
this was how you did it until a few weeks aogo.
