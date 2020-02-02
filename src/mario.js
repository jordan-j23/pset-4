const readlineSync = require("readline-sync");

let value = 0;

while (value < 1 || value > 24) {
value = readlineSync.question("Height: ");

num = parseInt(value);

if (num > 0 && num <= 24) { 

for (i = 1; i <= num; i++) {
var spaces = num - i; 
var hashes = i + 1; 

var spaceText = '';
var hashText = '';

for( j = 1; j <= spaces; j++) {
spaceText += ' ';
}
for( j = 1; j <= hashes; j++ ) {
hashText += '#';
}
console.log(spaceText + hashText); 
}
}
}
