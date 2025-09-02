let country = "México";
let continent = "América";
let population = "130";
let year = 1992;
let test;
let isMale = true;
let age = "";

//Arithmetic/math operators:
const now = 2022;
const ageVictor = now - 1992;
const ageLucy = now - 1998;
const ladoCuadrado = 25;
const areaCuadrado = ladoCuadrado ** 2;
const periCuadrado = ladoCuadrado * 4;
const baseTriangulo = 12;
const alturaTriangulo = 5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

//Assignment operators
let numero = 1;
numero++;
numero += 30;
numero *= 2;

//Comparison operators:
const isLegal = ageVictor >= 18;

//Operator precedence:
let x, y;
y = 10;
const a = 2;
const b = 5;
const c = 3;

let disc = Math.sqrt(b ** 2 - 4 * a * c);
let x1 = (-b + disc) / (2 * a);
let x2 = (-b - disc) / (2 * a);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof year);
console.log(typeof test);
console.log(typeof isMale);
console.log(typeof age);
console.log(ageVictor, ageLucy);
console.log(periCuadrado);
console.log(areaTriangulo, areaCuadrado);
console.log(numero);
console.log(isLegal);
console.log(x, y);
console.log(x1, x2);
