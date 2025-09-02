const myCounter = (function () {
  let counter = 0;

  function increment() {
    return ++counter;
  }

  function decrement() {
    return --counter;
  }

  function current() {
    return counter;
  }

  return {
    increment,
    decrement,
    current,
  }
})();

console.log(myCounter.current());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.current());
console.log(myCounter.decrement());
console.log(myCounter.decrement());
console.log(myCounter.current());

