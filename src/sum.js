 const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));

let total = 0;
let i = 0;

while (lowerBound <= Number.MIN_SAFE_INTEGER || upperBound >= Number.MAX_SAFE_INTEGER || lowerBound >= upperBound) {
   lowerBound = Number(readlineSync.question("Lower bound: "));
   upperBound = Number(readlineSync.question("Upper bound: "));
}
 if (lowerBound % 2===0) {
   for (i = lowerBound; i <= upperBound; i += 2)
   total = total + i;
 }
 else if (lowerBound % 2!==0) {
   for (i = lowerBound + 1; i <= upperBound; i +=2)
   total = total + i;
 }
total = total.toLocaleString("en");
console.log("\n" + total + ".")
