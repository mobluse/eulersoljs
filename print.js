exports.defPrint = function() {
  if (typeof process !== "undefined") { // assume node.js
    print = console.log;
  }
};