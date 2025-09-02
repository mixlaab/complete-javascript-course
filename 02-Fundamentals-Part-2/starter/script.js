"use strict";
let nombre = "Victor";
console.log(nombre);

// Expression
const num = 4+3;
const calcAge2 =  (birthYear) => 2037 - birthYear;
console.log(calcAge2);

sayHelloParameter();
console.log(nombre);

// Function as declarations
// 1. Function using a global variable
function sayHelloGlobal() {
  nombre =  "Viry"
  console.log("Hello, " + nombre);
}

// 2. Function using a local variable
function sayHelloLocal() {
  let nombre =  "Viry"
  console.log("Hello, " + nombre);
}

// 3. Function using a parameter with the same name as global variable
function sayHelloParameter(nombre) {
  nombre =  `*${nombre}*`
  console.log("Hello, " + nombre);
}

/* 
  Write a function called 'describeCountry' which takes three parameters: 
  'country', 'population' and 'capitalCity'. Based on this input, the function
  returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
*/
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

/*
Call this function 3 times, with input data for 3 different countries.
Store the returned values in 3 different variables, and log them to the console.
*/

const country1 = describeCountry("Finland", 6, "Helsinki");
const country2 = describeCountry("Canada", 38, "Ottawa");
const country3 = describeCountry("Mexico", 128, "Mexico City");

console.log(country1);
console.log(country2);
console.log(country3);

/*
The world population is 7900 million people. 
Create a function declaration called 'percentageOfWorld1' which receives a 'population' value,
and returns the percentage of the world population that the given population represents.
For example, China has 1441 million people, so it's about 18.2% of the world population.
*/

function percentageOfWorld1(population) {
  /* To calculate the percentage, divide the given 'population' value by 7900 
  and then multiply by 100.*/
  return (population / 7900) * 100;
}

/* Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console. */
const chinaPerc = percentageOfWorld1(1441);
const indiaPerc = percentageOfWorld1(1380);
const usaPerc = percentageOfWorld1(333);

console.log(chinaPerc);
console.log(indiaPerc);
console.log(usaPerc);

/* Create a function expression which does the exact same thing, called 'percentageOfWorld2',
and also call it with 3 country populations (can be the same populations).*/

const percentageOfWorld2 = function (population) {
  // The total world population is approximately 7.9 billion
  const worldPopulation = 7900;
  return (population / worldPopulation) * 100;
}



console.log(`Mexico: ${percentageOfWorld2(126)}`); // Mexico: 16.17708%
console.log(`China: ${percentageOfWorld2(1439)}`); // China: 184.4768%
console.log(`India: ${percentageOfWorld2(1380)}`); // India: 177.0566%
console.log(`United States: ${percentageOfWorld2(331)}`); // United States: 4.24823%
console.log(`Russia: ${percentageOfWorld2(145)}`); // Russia: 18.7553%

