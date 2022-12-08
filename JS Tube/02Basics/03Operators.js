// + - * / %

var num1 = 12;
var num2 = 6;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

var answer = num1 > num2;
console.log(answer);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = (listingPrice-sellingPrice)/listingPrice * 100;

console.log("Discount percentage is: " + Math.round(discountPercent) + "% off")

var result = listingPrice > sellingPrice
console.log(result)

console.log(typeof(result))               // typeof operator

