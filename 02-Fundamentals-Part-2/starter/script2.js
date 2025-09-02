const neighbors = ["United States of America", "Guatemala", "Belize"];

neighbors.push("Utopia");

console.log(neighbors);

neighbors.pop(); // Remove

if (!neighbors.includes("Germany")){
  console.log("Probably not a central European country");
}

console.log(neighbors);
neighbors[neighbors.indexOf("United States of America")] = "USA";
console.log(neighbors);

