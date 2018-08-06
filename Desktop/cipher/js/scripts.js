var first;
var last;
var stringLength;
var input = prompt("Type a sentence to codify: ");
var stringMiddle;
var middleLetter;
stringLength = input.length;


console.log(input);
console.log(stringLength);
console.log(Math.ceil(stringLength / 2));

// Capitalize First and Last Function

var capitalStr = function(input) {
  first = input.charAt(0).toUpperCase();
  last = input.charAt(stringLength - 1).toUpperCase();
  stringMiddle = input.slice(1, (stringLength - 1));
  capitalStr = first + stringMiddle + last;
  console.log(capitalStr);
  return(capitalStr);
}

alert(capitalStr(input));



// Capitalize and Switch Function

var switchFandL = function(input) {
  first = input.slice(0,1).toUpperCase();
  last = input.slice(-1).toUpperCase();
  stringMiddle = input.slice(1, (stringLength - 1));
  switchFandL = last + stringMiddle + first;
  console.log(switchFandL);
  return(switchFandL);
}

alert(switchFandL(input));

// Remove middle and place at front Function

var middleToFirst = function(switchFandL) {
  var midStrNum = Math.ceil(stringLength / 2);
  middleLetter = input.charAt(midStrNum-1);
  console.log(middleLetter);

  var middleToFirst = switchFandL.slice(middleLetter, 1);
  middleToFirst = switchFandL.slice(0,midStrNum-1) + switchFandL.slice(midStrNum,stringLength);
  middleToFirst = middleLetter + middleToFirst ;
  // above
  console.log(middleToFirst);
  return(middleToFirst);
}

alert(middleToFirst(switchFandL));
