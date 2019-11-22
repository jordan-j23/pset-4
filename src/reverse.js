const readlineSync = require("readline-sync");

const INT_MIN = 1;
const INT_MAX = Number.MAX_SAFE_INTEGER;

let pInteger = Number(readlineSync.question("\nPositive Integer: "));
let number;
let order = "";

while (Number.isNaN(pInteger) || !Number.isInteger(pInteger) || pInteger <INT_MIN || pInteger > INT_MAX) {
  pInteger = Number(readlineSync.question("Positive Integer: "));
}
while (pInteger >= INT_MIN){
  number = pInteger % 10;
  pInteger = Math.floor(pInteger / 10);
  if (pInteger >= 1) {
  order = order + number + ", ";
}
else {
  order = order + number + ".\n"
}
}
console.log("\n" + order);
