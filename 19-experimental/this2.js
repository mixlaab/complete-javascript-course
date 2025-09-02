// 'use strict';
const person = {
  name: 'Victor'
}

function getName() {
  console.log(person.name);
  
  const arrowHi = () => {
    console.log(`Hi ${person.name}!`);
    console.log(this);
  }

  arrowHi();
  // console.log(this.name);
}

getName();