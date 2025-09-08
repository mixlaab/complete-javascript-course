const restaurant = {
  name: "Seul Coreano",
  location: "Rio Orinoco 23, Nuevo Leon, México",
  categories: ["Korean", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
    }
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    open === 'closed' ? console.log(`On ${day}, we are closed.`) : console.log(`On ${day}, we open at ${open}.`);
}

// console.log(restaurant.order(0, 1));
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');

// console.log(restaurant.orderPizza(0, 1));
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist.');

// const users = [{ name: 'Victor', email: 'victor@testmail.com' }];
const users = [];

// With optional chaining and nullish coalescing operator
// console.log(users[0]?.name ?? 'User array empty.');

// Alternative without optional chaining: it is more verbose
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty.');
