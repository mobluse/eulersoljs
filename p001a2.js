//#!/usr/bin/rhino -strict
//#!/usr/bin/env node
//#!/usr/lib/jvm/jdk-8-oracle-arm-vfp-hflt/bin/jjs -strict=true

// https://projecteuler.net/problem=1

//require('./print.js').defPrint();
if (typeof process !== "undefined") { print = console.log; }

var offset = Date.now();

var N = 1000;
var sum = 0;
var mi;

for(var i = 1; (mi = 3*i) < N; ++i) {
  sum += mi;
}
for(i = 1; (mi = 5*i) < N; ++i) {
  sum += mi;
}
for(i = 1; (mi = 15*i) < N; ++i) {
  sum -= mi;
}
print(sum);

print(Date.now() - offset + " ms");