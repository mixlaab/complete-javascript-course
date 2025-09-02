'use strict';
const books = require('./books.js');

const [mainKeyword, ...rest] = books[0].keywords;
const {publisher: bookPublisher, ...restOfTheBook} = books[1];

function sum(...addends) {
  let sumResult = 0;
  for (const addend of addends){
    sumResult += Number(addend);
  }
  return sumResult;
}

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

console.log(sum(54, 32, 1, -34, -53));
// console.log(mainKeyword);
// console.log(rest);
console.log(bookPublisher);
// console.log(restOfTheBook);
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');