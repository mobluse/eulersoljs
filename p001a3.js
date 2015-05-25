//#!/usr/bin/rhino -strict
//#!/usr/bin/env node
//#!/usr/lib/jvm/jdk-8-oracle-arm-vfp-hflt/bin/jjs -strict=true

// https://projecteuler.net/problem=1

//require('./print.js').defPrint();
if (typeof process !== "undefined") { print = console.log; }

var offset = Date.now();

var N = 1000;
var sum = 0;

sum = aritmSum(N, 3);
sum += aritmSum(N, 5);
sum -= aritmSum(N, 15);
print(sum);

print(Date.now() - offset + ' ms');

function aritmSum(N, k) {
  var n = Math.floor((N-1)/k);
  return k*n*(n+1)/2;
}