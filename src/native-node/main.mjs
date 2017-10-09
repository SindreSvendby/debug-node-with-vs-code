#!/usr/bin/env node
const debugFoo = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(process.env.FOO);
    }, 100);
  });
};

export default async function main() {
  const result = await debugFoo();
  console.log("Result: ", result);
}

// not able to trigger a breakpoint ...
// main();
