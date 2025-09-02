function counter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    decrement,
    getValue
  };
}

const countFunc = counter();
console.log(countFunc.getValue());
console.log(countFunc.increment());
console.log(countFunc.increment());
console.log(countFunc.increment());
console.log(countFunc.increment());
console.log(countFunc.getValue());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.decrement());
console.log(countFunc.getValue());
// countFunc();
// countFunc();
// countFunc();
// countFunc();