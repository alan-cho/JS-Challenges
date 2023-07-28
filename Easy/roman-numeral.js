/*
Write a program that converts modern decimal numbers into their Roman number equivalents.

Problem:
  Given a number, return the equivalent in Roman numerals. Don't have to convert numbers larger than 3000.
  Romans used letters to write numbers:
    I: 1
    V: 5
    X: 10
    L: 50
    C: 100
    D: 500
    M: 1000
  Subtraction Rule: If there's a smaller number infront of a larger number, it's meant to subtract from the larger number.
    This is how we can get the number four: IV = 1 - 5. The rule applies to every letter the Romans used.
    It follows the pattern of the smaller number representing one before the larger number.
    Examples: 
      CCCLXIX = 100 + 100 + 100 + (50 + 10) + (1 - 10) = 300 + 60 + 9 = 369.
      CDXLVIII = (100 - 500) + (10 - 50) + 5 + (1 + 1 + 1) = 400 + 40 + 5 + 3 = 448.

Data Structure:
  Intermediate Structure - Array
  Final Structure - String

Algorithm:
  Create an array to hold the digits of the input.
  Extract the input number to hold the individiual digits, preserving its order:
    Continously divide by 10, saving the remainder value until the number is one digit.
    Save the remainders into the array.
  Find the equivalent Roman numeral for each element in the array.
  Concatenate the Roman numerals into a string.
  Return the string.
*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = "";
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach((numeral) => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += numeral.repeat(multiplier);
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

module.exports = RomanNumeral;
