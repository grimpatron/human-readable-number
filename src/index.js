module.exports = function toReadable (number) {
  let result = "";
  let x = number % 10;
  let xx =  Math.trunc(number / 10 % 10);
  let xxx = Math.trunc(number / 100 % 10);

  if (number > 99 && xxx != 0) {
    units(xxx);
    result += " hundred";
    if (xx != 0) {
      result += " ";
    }
  }

  console.log ( xxx, " - xxx", xx, " - xx", x, " - x" );

  switch (xx) {
    case 1: if (x == 0) {
      result += "ten";
    } else if (x == 1) {
      result += "eleven";
    } else if ( x == 2) {
      result += "twelve";
    } else if ( x == 3) {
      result += "thirteen";
    } else if ( x == 4) {
      result += "fourteen";
    } else if ( x == 5) {
      result += "fifteen";
    } else if ( x == 6) {
      result += "sixteen";
    } else if ( x == 7) {
      result += "seventeen";
    } else if ( x == 8) {
      result += "eighteen";
    } else if ( x == 9) {
      result += "nineteen";
    }; x = 0; break;
    case 2: result += "twenty"; break;
    case 3: result += "thirty"; break;
    case 4: result += "forty"; break;
    case 5: result += "fifty"; break;
    case 6: result += "sixty"; break;
    case 7: result += "seventy"; break;
    case 8: result += "eighty"; break;
    case 9: result += "ninety"; break;
  }

  if (x != 0 && number > 10) {
    result += " ";
  }

  units(x);
  function units(x) {
    switch (x) {
      case 1: result += "one"; break;
      case 2: result += "two"; break;
      case 3: result += "three"; break;
      case 4: result += "four"; break;
      case 5: result += "five"; break;
      case 6: result += "six"; break;
      case 7: result += "seven"; break;
      case 8: result += "eight"; break;
      case 9: result += "nine"; break;
    }
  }

  if (number == 0) {
    result = "zero";
  }
  // if (result[length(-1)] == " ") {
  //   result = result.slice(0, -1);
  // }
  return result;
}
