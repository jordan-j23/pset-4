const readlineSync = require("readline-sync");

const INT_MIN = 1;
const INT_MAX = Number.MAX_SAFE_INTEGER;

let pInteger = Number(readlineSync.question("\nPositive Integer: "));
let total = 0;
let number = 0;

while (Number.isNaN(pInteger) || !Number.isInteger(pInteger) || pInteger < INT_MIN || pInteger > INT_MAX) {
  pInteger = Number(readlineSync.question("Positive Integer: "));
}
 while (pInteger != 0) {
   number = pInteger % 10;
   pInteger = Math.floor(pInteger / 10);
   if (number % 2 != 0) {
     total = total + number;
   }
 }

 console.log("\n" + total + ".")
