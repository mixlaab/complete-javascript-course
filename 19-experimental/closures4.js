const myCounter = (function () {
  let count = 0;

  function increment() {
    debugger;
    return ++count;
  }

  function decrement() {
    debugger;
    return --count;
  }

  function getCurrentValue() {
    debugger;
    return count;
  }

  return {
    increment,
    decrement,
    getCurrentValue
  }
})();

myCounter.increment();
myCounter.increment();
myCounter.getCurrentValue();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();