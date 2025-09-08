const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
const [dish1, , dish2] = wholeMenu;
console.log(dish1);
console.log(dish2);

for (const item of wholeMenu) console.log(item);

for (const [i, el] of wholeMenu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

console.log(...wholeMenu.entries());