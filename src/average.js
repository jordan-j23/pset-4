const readlineSync = require("readline-sync");

const INT_MIN = 0;
const INT_MAX = Number.MAX_SAFE_INTEGER;
let total = 0;
let number = 0;
let divisor = 0;

console.log();

do{
  integer = Number(readlineSync.question("Non-negative integer: "));
  if (number >= 0 && integer < Number.MAX_SAFE_INTEGER && !Number.isNaN(number) && integer % 1 == 0 && Number.isInteger(number)) {
    total = total + number;
    divisor = divisor + 1;
  }
while ((number >= 0) || Number.isNaN(number) || divisor == 0)
}
let avg = total / divisor;
avg = avg.toLocaleString("en");

console.log("\n" + avg + ".")
