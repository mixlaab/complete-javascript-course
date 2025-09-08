const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const [first, second, third] = weekdays;
const openingHours = {
  [first]: {
    open: 9,
    close: 20,
  },
  tue: {
    open: 9,
    close: 20,
  },
  wed: {
    open: 9,
    close: 20,
  },
  thu: {
    open: 9,
    close: 20,
  },
  fri: {
    open: 9,
    close: 22,
  },
  [`day-${weekdays[5]}`]: {
    open: 9,
    close: 14,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
  }
}

console.log(restaurant.openingHours);
restaurant.order(2, 0);