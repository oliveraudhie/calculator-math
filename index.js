function add(varA, varB) {
  return varA + varB;
}

function substract(varA, varB) {
  return varA - varB;
}

function multiply(varA, varB) {
  return varA * varB;
}

function divide(varA, varB) {
  return varA / varB;
}

function modulo(varA, varB) {
  return varA % varB;
}

var X = add(5, 5)
console.log(X);
var Y = substract(divide(5, 5), 5)
console.log(Y);
var Z = divide(multiply(5, 5), 5)
console.log(Z);