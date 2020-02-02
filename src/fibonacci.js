const readlineSync = require("readline-sync");

let value = 0;

let a = 0;
let b = 1;
let c = 1;

while (value < 1 || value > 78) {
value = readlineSync.question("Positive integer: ");


num = parseInt(value);

if (num > 0 && num <= 78) {
for (i = 2; i <= num; i++) { 
c = a + b; 
a = b;
b = c;
}
}

}

c = c.toLocaleString();
console.log("\n" + c + '.');
