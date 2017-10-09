// with std/esm with `esm: "js"` option enabled. iow: enabling the import and export syntax.

require = require("@std/esm")(module, { esm: "js" });
const main = require("./main.js").default;

main();

// From root
// FOO="Foo" node src/std-esm/index.js
