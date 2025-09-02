const language = 'English';
const population =  40;
const isIsland = false;
const country = 'México';

if (language === 'English'&& population < 50 && !isIsland) {
  console.log(`You should live in ${country} 😁`);
} else {
  console.log(`${country} does not meet your criteria 😔`);
}