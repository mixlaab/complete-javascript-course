const numbersList = [1, 2, 3, 4];

const sum = numbersList.reduce((acc, currentVal) => acc + currentVal);

Array.prototype.reduceTest = function (cb, initialVal) {
  let acc = initialVal;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const sum2 = numbersList.reduceTest((acc, currentVal) => acc + currentVal);

// console.log(sum);
console.log(sum2);
