let person1 = {
  name: 'Viry'
}

let person2 = person1;

person1 = { name: 'Victor' };
// person1.name = 'Javi';

console.log(person1);
console.log(person2);


// Caso adicional: Comparación de objetos
console.log("\nCaso adicional: Comparación de objetos");
let obj1 = { name: 'Test' };
let obj2 = { name: 'Test' };
let obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2);
console.log("obj1 === obj3:", obj1 === obj3);
