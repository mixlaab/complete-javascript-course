import { books } from './books.js';

const bookAuthors = [...books[0].author, ...books[1].author];

const spellWord = function (word) {
  console.log(...word);
};

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'No data available';
};

const [mainKeyword, ...rest] = books[0].keywords;
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// spellWord('Javascript');
console.log(books);
// console.log(mainKeyword);
// console.log(rest);
console.log(bookPublisher);
console.log(restOfTheBook);
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
console.log(hasExamplesInJava(books[1]));

for (const book of books) {
  book.onlineContent && console.log(`${book.title} has online content`);
}

for (const book of books) {
  book.onlineContent ??
    console.log(`${book.title} provides no data about its online content`);
}

for (let i = 0; i < books.length; i++) {
  books[i].edition ??= 1;
}

for (let i = 0; i < books.length; i++) {
  books[i].highlighted &= books[i].thirdParty.goodreads.rating < 4.2;
}

console.log(books);
