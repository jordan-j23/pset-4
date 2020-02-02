const readlineSync = require("readline-sync");

let count = 0; 
let sum = 0; 
let value = 0;

while (value >= 0) {
value = readlineSync.question("Non-negative integer: ");

num = parseInt ( value ) ;

if( num >= 0) {
count++;
sum += num;
}
}

avg = sum / count;
avg = avg.toLocaleString(undefined, {minimumFractionDigits:3} );
console.log("\n" + avg + '.');
