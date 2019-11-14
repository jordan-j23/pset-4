 const readlineSync = require("readline-sync")

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
let sum = 0;

const lowerBound = Number(readlineSync.question("\nLower bound: "));
const upperBound = Number(readlineSync.question("Upper bound: "));

while (lowerBound <= Number.MIN_SAFE_INTEGER || upperBound >= Number.MAX_SAFE_INTEGER) {
  console.log("Upper bound: ");
  console.log("Lower bound:");
}
 if (lowerBound % 2===0 && lowerbound !==0) {
   sum = sum + lowerBound;
 }
 else if (lowerBound % 2!==0)
