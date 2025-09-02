'use strict';

const victor = {
  birthYear: 1992,
  calcAge: () => {
    console.log("En función flecha:", this);
    return 2024;
  },
  calcAgeRegular: function() {
    console.log("En función regular:", this);
    return 2024;
  }
};

const viry = {
  birthYear: 1994
};

viry.calcAge = victor.calcAge;
viry.calcAgeRegular = victor.calcAgeRegular;

const f = victor.calcAge;
const fRegular = victor.calcAgeRegular;

console.log(this);

console.log("1. Llamada como método de victor (flecha):");
console.log(victor.calcAge());

console.log("\n2. Llamada como método de viry (flecha):");
console.log(viry.calcAge());

console.log("\n3. Llamada como función independiente (flecha):");
console.log(f());

console.log("\n4. Llamada como método de victor (regular):");
console.log(victor.calcAgeRegular());

console.log("\n5. Llamada como método de viry (regular):");
console.log(viry.calcAgeRegular());

console.log("\n6. Llamada como función independiente (regular):");
console.log(fRegular());