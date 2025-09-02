// 1. Modificando module.exports directamente
// 'use strict';
module.exports.customProperty = "Hello from module.exports";

const arrowFunction = () => {
    console.log("1. Arrow function after modifying module.exports:");
    console.log(this);
};

const regularFunction = function() {
  console.log("2. Regular function after modifying module.exports:");
  console.log(this);
};

arrowFunction();
regularFunction();
console.log(this);