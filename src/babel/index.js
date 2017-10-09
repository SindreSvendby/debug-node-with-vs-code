//only needed when you run babel and then node, babel-node fixes it for you.
import "babel-polyfill";

import main from "./main.js";
main();

// From root:
// FOO="Foo" babel-node --presets env src/babel/index.js

// or in two steps:
// npm run build
// FOO="Foo" node dist/babel/index.js
