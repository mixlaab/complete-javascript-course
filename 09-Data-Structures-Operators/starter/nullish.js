const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numGuests: 0
};

const guestsIncorrect = restaurant.numGuests || 10;
console.log(guestsIncorrect); // Outputs 10 because 0 is a falsy value
const guests = restaurant.numGuests ?? 10;
console.log(guests);