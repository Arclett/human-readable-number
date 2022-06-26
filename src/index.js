module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const space = ' '
    const num = Array.from(number.toString());
    if (number < 20) {
        return digits[number];
    } else if (number < 100 && number > 19 && Number(num[1]) === 0) {
        return tens[Number(num[0]) - 2];
    } else if (number < 100 && number > 19 && Number(num[1]) !== 0) {
        return tens[Number(num[0]) - 2] + space + digits[Number(num[1])];
    } else if (number > 100 && Number(num[1]) === 0 && Number(num[2]) !== 0) {
        return digits[Number(num[0])] + ' hundred ' + digits[num[2]];
    } else if (number > 100 && Number(num[1]) < 2 && Number(num[1]) !== 0) {
        return digits[Number(num[0])] + ' hundred ' + digits[number - 100*Number(num[0])];
    } else if (number > 100 && Number(num[1]) !== 0 && Number(num[2]) === 0) {
        return digits[Number(num[0])] +' hundred '+ tens[Number(num[1]) - 2];
    } else if (Number(num[1]) === 0 && Number(num[2]) === 0) {
        return digits[Number(num[0])] + ' hundred';
    } else {
        return digits[Number(num[0])] + ' hundred ' + tens[Number(num[1]) - 2] + space + digits[Number(num[2])];
    }
};
