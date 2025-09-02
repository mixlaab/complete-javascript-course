'use strict';
const myObject = {
  multiplier: 2,
  numbers: [1, 2, 3, 4, 5],
  multiplyNumbers: function() {
    this.numbers.forEach((num) => {
      console.log(this);
      console.log(num * this.multiplier)
    });
  }
};

// Call the method
myObject.multiplyNumbers();