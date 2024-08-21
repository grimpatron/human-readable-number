module.exports = function toReadable(number) {
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (number == 0) return "zero";
    let result = "";
    hundreds = Math.floor(number / 100);
    tens = Math.floor((number / 10) % 10);
    ones = number % 10;

    if (hundreds != 0) {
        result += digits[hundreds];
        result += " hundred ";
    }
    switch (tens) {
        case 1:
            if (ones == 0) {
                result += "ten";
            } else if (ones == 1) {
                result += "eleven";
            } else if (ones == 2) {
                result += "twelve";
            } else if (ones == 3) {
                result += "thirteen";
            } else if (ones == 4) {
                result += "fourteen";
            } else if (ones == 5) {
                result += "fifteen";
            } else if (ones == 6) {
                result += "sixteen";
            } else if (ones == 7) {
                result += "seventeen";
            } else if (ones == 8) {
                result += "eighteen";
            } else if (ones == 9) {
                result += "nineteen";
            }
            break;
        case 2:
            result += "twenty ";
            break;
        case 3:
            result += "thirty ";
            break;
        case 4:
            result += "forty ";
            break;
        case 5:
            result += "fifty ";
            break;
        case 6:
            result += "sixty ";
            break;
        case 7:
            result += "seventy ";
            break;
        case 8:
            result += "eighty ";
            break;
        case 9:
            result += "ninety ";
            break;
        default:
            break;
    }
    if (tens != 1) {
        result += digits[ones];
    }
    return result.trim();
};
