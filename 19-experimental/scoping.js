function calcAge(birthYear) {
  const currentYear = new Date().getFullYear();
  
  function printAge(){
    const age = currentYear - birthYear;
    console.log(`You are ${age} years old, born in ${birthYear}`);

    if (birthYear > 1981 && birthYear < 1996) {
      console.log(`You're a millenial ${firstName}`);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 4));
  }
  printAge();
  return currentYear - birthYear;
}

const firstName = 'Victor';
calcAge(1992);