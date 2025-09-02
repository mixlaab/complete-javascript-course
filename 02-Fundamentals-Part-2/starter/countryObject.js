//1. Add a method called 'describe' to the 'myCountry' object. This method
//will log a string to the console, similar to the string logged in the previous
//assignment, but this time using the 'this' keyword.
const miPais = {
  country: "México",
  capital: "Cd. de México",
  language: "Español",
  population: 131,
  neighbours: ["USA", "Guatemala", "Belice"], // para is Island = false
  //neighbours: [], //para is island = true
  describe: function () {
      const msg = `${this.country} has ${this.population} million ${this.language}-speaking people,` +
          `${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
      return msg;
  },
  checkIsland: function () {
      this.isIsland = this.neighbours.length === 0 ? true : false;
      return this.isIsland;
  }
}
//2. Call the 'describe' method
console.log(miPais.describe());
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,\
// ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// //3. Add a method called 'checkIsland' to the 'myCountry' object. This
// //method will set a new property on the object, called 'isIsland'.
// //'isIsland' will be true if there are no neighbouring countries, and false if
// //there are. Use the ternary operator to set the property.
// console.log("Is Island = ", myCountry.checkIsland());
// var mensaje = `Este es un mensaje largo que quiero imprimir en
//              varias líneas de código para que sea más legible.`;
// console.log(mensaje.replace(/\n/g, " "));
// //console.log(mensaje);