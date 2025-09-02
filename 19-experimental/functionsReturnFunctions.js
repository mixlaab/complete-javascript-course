const greet = (greeting) => (name) => `${greeting} ${name}`;

console.log(greet('Hello')('Victor'));