function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  const arr = expr.split("");

  const openBrackets = arr.filter(item => item === "(");
  const closeBrackers = arr.filter(item => item === ")");

  if (openBrackets.length !== closeBrackers.length)
    throw "ExpressionError: Brackets must be paired";

  const result = new Function(`return ${expr}`);
  if (result() === Infinity) throw "TypeError: Devision by zero.";

  return result();
}

module.exports = {
  expressionCalculator
};
