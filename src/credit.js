const readlineSync = require("readline-sync");

let value = 0;

while (value <= 0) {
  value = readlineSync.question("Number: ");
  let num = parseInt(value);
if (num < 0) {
continue;
}
num = num.toString();
let firstTwoDigits = num.substr(0, 2); 
let firstDigit = num.substr(0, 1);
let length = num.length; 

if (length == 15) {
  if (firstTwoDigits == 34 || firstTwoDigits == 37) { 
var evenSum = 0; 
var oddSum = 0;

for (var i = length; i >= 0; i--) { 
  if (i % 2 == 0) {
    var number = num.charAt(i-1) * 2;
    var sum = 0;

while (number) {
  sum += number % 10; 
  number = Math.floor(number / 10); 
}
evenSum += sum;
} else {

oddSum += num.charAt(i-1) * 1; 
} //15-1
}
var totalSum = evenSum + oddSum;

if (totalSum % 10 == 0) {
console.log("\nAmex.\n");
} else {
console.log("\nInvalid.\n");
}
}
} else if (length == 16 || length == 13) {

if (length == 16 && (firstTwoDigits == 51 || firstTwoDigits == 52 || firstTwoDigits == 53 || firstTwoDigits == 54 || firstTwoDigits == 55)) {
  var evenSum = 0;
  var oddSum = 0;

for (var i = length; i >= 0; i--)
{

if (i % 2 != 0) {
var number = num.charAt(i-1) * 2;
var sum = 0;

while (number) {
  sum += number % 10;
number = Math.floor(number / 10);
}
evenSum += sum;
}
else {
oddSum += num.charAt(i-1) * 1;

}

}
var totalSum = evenSum + oddSum;
if (totalSum % 10 == 0) {
console.log("\nMastercard\n");
}
else {
console.log("\nInvalid\n.");
}
}else if (firstDigit == 4 )
{
var evenSum = 0;
var oddSum = 0;
for (var i = length; i >= 0; i--)
{

  if (i % 2 != 0) {
    var number = num.charAt(i-1) * 2;
    var sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
evenSum += sum;
}
else {
oddSum += num.charAt(i-1) * 1;

}

}
var totalSum = evenSum + oddSum;
if (totalSum % 10 == 0) {
console.log("\nVisa\n");
}
else {
console.log("\nInvalid.\n");
}
}else{console.log("\ninvalid\n");}

} else {
console.log("\ninvalid\n");
}
}
