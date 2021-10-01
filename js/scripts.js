function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
const minus = subtract(number1, number2);
const fact = number1 * number2
alert("The sum of " + number1 + " and " + number2 + " is: " + result);
alert("The diference of your numbers is: " + minus);
alert("The product of your numbers is: " + fact)
