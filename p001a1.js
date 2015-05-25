//#!/usr/bin/rhino -strict
//#!/usr/bin/env node
//#!/usr/lib/jvm/jdk-8-oracle-arm-vfp-hflt/bin/jjs -strict=true

// https://projecteuler.net/problem=1

//require('./print.js').defPrint();
if (typeof process !== "undefined") { print = console.log; }

var offset = Date.now();

var sum = 0;

for(var i = 1; i < 1000; ++i) {
  if (i%3 == 0 || i%5 == 0) {
    sum += i;
  }
}
print(sum);

print(Date.now() - offset + " ms");

function defPrint() {
  if (typeof process !== "undefined") { // assume node.js
    print = console.log;
  }
}