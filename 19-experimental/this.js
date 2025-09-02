'use strict';
console.log(this);
let person = {
  name: 'Victor',
  printName: () => {
    console.log(this.name);
  }
}

let individual = {
  name: 'Juan Camamey',
  printName: function() {
    console.log(individual.name);
  }
}

// Originales
console.log('Originales');
person.printName();
individual.printName();

let otherPerson = person;
let otherIndividual = individual;

person = {lastName: 'Medrano'};
individual = {
  name: 'John',
  printName: () => {
    console.log('trampa');
  }
};

console.log('');
console.log(person);
console.log(individual);
console.log(otherPerson);
console.log(otherIndividual);

// Copias
console.log('\nCopias');
otherPerson.printName();
otherIndividual.printName();