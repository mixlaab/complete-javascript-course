'use strict';

const victor = {
  birthYear: 1992,
  calcAge: () => {
    console.log(this);
    return 2024;
  }
}

const viry = {
  birthYear: 1994
}

viry.calcAge = victor.calcAge;
const f = viry.calcAge;

console.log(viry.calcAge);
console.log(viry.calcAge());
console.log(f());