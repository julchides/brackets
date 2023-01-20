module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map((x) => x[0]);
  const pairBrackets = Object.fromEntries(bracketsConfig);

  let stackBrackets = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    let topBracket = stackBrackets[stackBrackets.length - 1];

    if (openBrackets.includes(currentBracket)) {
      if (pairBrackets[currentBracket] === currentBracket) {
        if (currentBracket === topBracket) {
          stackBrackets.pop();
        }
      }
      stackBrackets.push(currentBracket);
    } else if (stackBrackets.length === 0) {
      return false;
    }

    if (pairBrackets[topBracket] === currentBracket) {
      stackBrackets.pop();
    } else if (stackBrackets.length === 0) {
      return false;
    }
  }

  return stackBrackets.length === 0;
};
