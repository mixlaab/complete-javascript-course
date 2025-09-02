'use strict';
const books = require('./books.js');

const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);


function spellWord(word) {
  console.log(...word);
}

// spellWord('JavaScript');