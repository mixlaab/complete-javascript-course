const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [a, b, , d] = restaurant.categories;
console.log(a, b, d);

[a, b, d] = [d, a, b];
console.log(a, b, d);

const [starterDish, mainDish] = restaurant.order(1, 2);
console.log(starterDish, mainDish);

const nested = [2, 4, [5, 6]];

const [i, k, [, j]] = nested;
console.log(i, j, k);

const colorArr = [, 20, 30];
const [red = 1, green = 2, blue = 3] = colorArr;
console.log(red, green, blue);
console.log(colorArr[0]);

const {
  name: restaurantName,
  openingHours: restaurantHours,
  categories,
} = restaurant;

console.log(restaurantName, restaurantHours, categories);

const dog1 = {
  name: 'Layla',
  age: 0.25,
  breed: 'Chihuahua',
  generalInfo: {
    owner: 'Alice',
    address: {
      street: 'Calle de la Luna',
      number: 42,
    },
    isVaccinated: true,
  },
};

const { name: dogName, age: dogAge } = dog1;
console.log(dogName, dogAge);

restaurant.orderDelivery({
  address: 'Cerro del Potosí 1111',
});

const {
  generalInfo: {
    address: { street: dogStreet },
  },
} = dog1;

console.log(dogStreet);

const mainMenuCopy = [...restaurant.mainMenu];

mainMenuCopy[0] = 'Taco';
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

const restaurantCopy = { ...restaurant };
restaurant.location = 'Cerro del Potosí 1111';
console.log(restaurantCopy);
console.log(restaurant);

const dogCopy = { ...dog1 };
dogCopy.generalInfo.owner = 'Viry';

console.log(dogCopy);
console.log(dog1);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);
