let string = "98765432210";
let isContainPlus91, isContainZero;

function findvalidIndianNumber(string) {
  isContainPlus91 = string.startsWith("+91");
  isContainZero = string.startsWith("0");

  if (
    (isContainPlus91 || isContainZero || isDigit(string)) &&
    isDigit(string)
  ) {
    return true;
  }
  return false;
}
function isDigit(string) {
  if (isContainPlus91) {
    string = string.replace("+91", "");
    return isNumber(string);
  } else if (isContainZero) {
    string = string.replace("0", "");
    return isNumber(string);
  } else {
    return isNumber(string);
  }
}
function isNumber(string) {
  if (string.trim().length == 10) {
    for (i = 0; i < string.length; i++) {
      if (Number(string.charAt(i)) >= 0 && Number(string.charAt(i)) <= 9) {
      } else {
        return false;
      }
      return true;
    }
  }
  return false;
}

console.log(`Given Number Is: ${findvalidIndianNumber(string)}`);
