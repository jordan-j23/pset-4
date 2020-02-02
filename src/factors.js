const readlineSync = require("readline-sync");
let value = 0;

while (value <= 0) {
value = readlineSync.question("Positive integer: ");
num = parseInt(value);

limit = Math.sqrt(num);


factors = '';

for (var i = 1; i <= limit; i++) { 
if (num % i == 0) { 
smallNum = i; 
largeNum = num / i; 

if (factors.length == 0) {
factors = i; 
} else {
factors += ', ' + smallNum;
}

if (smallNum != largeNum) {
factors += ', ' + largeNum; 
}
}
}

console.log(factors + '.');
}
