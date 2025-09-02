const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;
const addPlaneButton = document.querySelector('.add-plane');

lufthansa.planes = 300;

lufthansa.addPlane = function() {
  console.log(this);
  this.planes++;
}

lufthansa.addPlane();

lufthansa.book(239, 'Victor');
lufthansa.book(666, 'Viry');

// book(23, 'Sarah');

book.call(eurowings, 23, 'Sarah');
book.apply(eurowings, [132, 'Javi']);
const bookLufthansa = book.bind(lufthansa);
const bookEurowings = book.bind(eurowings);
bookLufthansa(666, 'Jessy');
bookEurowings(321, 'Peter');

console.log(lufthansa);
console.log('-------------');
console.log(eurowings);
console.log('-------------');
// console.log(bookLufthansa);
// console.log(bookEurowings);

addPlaneButton.addEventListener('click', lufthansa.addPlane.bind(lufthansa));

const addTax = (rate, value) => value + rate * value;


const addDefaultTaxRate = rate => value => value + rate * value;
const addTaxMx = addDefaultTaxRate(0.16);
console.log(addTaxMx(100));
console.log(addTaxMx(200));






