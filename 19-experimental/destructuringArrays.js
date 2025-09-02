'use strict';
const book = {
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  publisher: 'Addison-Wesley Professional',
  publicationDate: '2011-03-24',
  edition: 4,
  keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
  pages: 976,
  format: 'hardcover',
  ISBN: '9780321573513',
  language: 'English',
  programmingLanguage: 'Java',
  onlineContent: true,
  thirdParty: {
    goodreads: {
      rating: 4.41,
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  },
  highlighted: true
};

const restaurantMenu = {
  entryCourses: [
    {
      name: 'Bruschetta',
      ingredients: ['Tomatoes', 'Garlic', 'Basil', 'Olive Oil', 'Bread'],
      price: 8.99,
      vegetarian: true,
      spicyLevel: 1
    },
    {
      name: 'Stuffed Mushrooms',
      ingredients: ['Mushrooms', 'Cheese', 'Breadcrumbs', 'Garlic', 'Herbs'],
      price: 10.99,
      vegetarian: true,
      spicyLevel: 1
    },
    {
      name: 'Shrimp Cocktail',
      ingredients: ['Shrimp', 'Cocktail Sauce', 'Lemon'],
      price: 12.99,
      vegetarian: false,
      spicyLevel: 2
    }
  ],
  mainCourses: [
    {
      name: 'Grilled Salmon',
      ingredients: ['Salmon', 'Lemon', 'Garlic', 'Olive Oil', 'Herbs'],
      price: 18.99,
      vegetarian: false,
      spicyLevel: 1
    },
    {
      name: 'Chicken Alfredo',
      ingredients: ['Chicken', 'Pasta', 'Cream', 'Parmesan', 'Garlic'],
      price: 16.99,
      vegetarian: false,
      spicyLevel: 1
    },
    {
      name: 'Vegetarian Lasagna',
      ingredients: ['Lasagna Noodles', 'Tomatoes', 'Cheese', 'Spinach', 'Ricotta'],
      price: 15.99,
      vegetarian: true,
      spicyLevel: 1
    },
    {
      name: 'Spicy Beef Tacos',
      ingredients: ['Beef', 'Taco Shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Jalapenos'],
      price: 14.99,
      vegetarian: false,
      spicyLevel: 4
    }
  ],

  getOrder: function(entryCourseIndex, mainCourseIndex) {
    return [this.entryCourses[entryCourseIndex], this.mainCourses[mainCourseIndex]];
  }
};

let [firstKeyword, , secondKeyword] = book.keywords;
[firstKeyword, secondKeyword] = [secondKeyword, firstKeyword];

console.log(firstKeyword);
console.log(secondKeyword);

const [entryCourse, mainCourse] = restaurantMenu.getOrder(1, 3);
console.log(entryCourse);
console.log(mainCourse);